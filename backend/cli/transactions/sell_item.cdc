import FungibleToken from "../contracts/FungibleToken.cdc"
import NonFungibleToken from "../contracts/NonFungibleToken.cdc"
import FUSD from "../contracts/FUSD.cdc"
import ModernMusician from "../contracts/ModernMusician.cdc"
import ModernMusicianStorefront from "../contracts/ModernMusicianStorefront.cdc"

transaction(saleItemID: UInt64, saleItemPrice: UFix64) {
    let flowReceiver: Capability<&FUSD.Vault{FungibleToken.Receiver}>
    let modernMusicianProvider: Capability<&ModernMusician.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
    let storefront: &ModernMusicianStorefront.Storefront

    prepare(acct: AuthAccount) {
        // We need a provider capability, but one is not provided by default so we create one if needed.
        let modernMusicianCollectionProviderPrivatePath = /private/modernMusicianCollectionProviderForModernMusicianStorefront

        self.flowReceiver = acct.getCapability<&FUSD.Vault{FungibleToken.Receiver}>(/public/fusdReceiver)!
        assert(self.flowReceiver.borrow() != nil, message: "Missing or mis-typed FUSD receiver")

        if !acct.getCapability<&ModernMusician.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(modernMusicianCollectionProviderPrivatePath)!.check() {
            acct.link<&ModernMusician.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(modernMusicianCollectionProviderPrivatePath, target: ModernMusician.CollectionStoragePath)
        }

        self.modernMusicianProvider = acct.getCapability<&ModernMusician.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(modernMusicianCollectionProviderPrivatePath)!
        assert(self.modernMusicianProvider.borrow() != nil, message: "Missing or mis-typed ModernMusician.Collection provider")

        self.storefront = acct.borrow<&ModernMusicianStorefront.Storefront>(from: ModernMusicianStorefront.StorefrontStoragePath)
            ?? panic("Missing or mis-typed ModernMusicianStorefront Storefront")
    }

    execute {
        let saleCut = ModernMusicianStorefront.SaleCut(
            receiver: self.flowReceiver,
            amount: saleItemPrice
        )
        self.storefront.createListing(
            nftProviderCapability: self.modernMusicianProvider,
            nftType: Type<@ModernMusician.NFT>(),
            nftID: saleItemID,
            salePaymentVaultType: Type<@FUSD.Vault>(),
            saleCuts: [saleCut]
        )
    }
}