import FungibleToken from "../contracts/FungibleToken.cdc"
import NonFungibleToken from "../contracts/NonFungibleToken.cdc"
import FUSD from "../contracts/FUSD.cdc"
import ModernMusician from "../contracts/ModernMusician.cdc"
import ModernMusicianStorefront from "../contracts/ModernMusicianStorefront.cdc"

transaction(listingResourceID: UInt64, storefrontAddress: Address) {
    let paymentVault: @FungibleToken.Vault
    let modernMusicianCollection: &ModernMusician.Collection{NonFungibleToken.CollectionPublic}
    let storefront: &ModernMusicianStorefront.Storefront{ModernMusicianStorefront.StorefrontPublic}
    let listing: &ModernMusicianStorefront.Listing{ModernMusicianStorefront.ListingPublic}

    prepare(acct: AuthAccount) {
        self.storefront = getAccount(storefrontAddress)
            .getCapability<&ModernMusicianStorefront.Storefront{ModernMusicianStorefront.StorefrontPublic}>(
                ModernMusicianStorefront.StorefrontPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow Storefront from provided address")

        self.listing = self.storefront.borrowListing(listingResourceID: listingResourceID)
                    ?? panic("No Offer with that ID in Storefront")
        let price = self.listing.getDetails().salePrice

        let mainFlowVault = acct.borrow<&FUSD.Vault>(from: /storage/fusdVault)
            ?? panic("Cannot borrow FUSD vault from acct storage")
        self.paymentVault <- mainFlowVault.withdraw(amount: price)

        self.modernMusicianCollection = acct.borrow<&ModernMusician.Collection{NonFungibleToken.CollectionPublic}>(
            from: ModernMusician.CollectionStoragePath
        ) ?? panic("Cannot borrow NFT collection receiver from account")
    }

    execute {
        let item <- self.listing.purchase(
            payment: <-self.paymentVault
        )

        self.modernMusicianCollection.deposit(token: <-item)

        self.storefront.cleanup(listingResourceID: listingResourceID)
    }
}