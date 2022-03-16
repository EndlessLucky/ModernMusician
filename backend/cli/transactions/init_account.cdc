import NonFungibleToken from "../contracts/NonFungibleToken.cdc"
import ModernMusician from "../contracts/ModernMusician.cdc"
import FUSD from  "../contracts/FUSD.cdc"
import FungibleToken from  "../contracts/FungibleToken.cdc"

transaction {
  let address: Address

  prepare(currentUser: AuthAccount) {
    if(currentUser.borrow<&FUSD.Vault>(from: /storage/fusdVault) == nil) {
      currentUser.save(<-FUSD.createEmptyVault(), to: /storage/fusdVault)
      currentUser.link<&FUSD.Vault{FungibleToken.Receiver}>(
        /public/fusdReceiver,
        target: /storage/fusdVault
      )

      currentUser.link<&FUSD.Vault{FungibleToken.Provider}>(
        /public/fusdProvider,
        target: /storage/fusdProvider
      )

      currentUser.link<&FUSD.Vault{FungibleToken.Balance}>(
        /public/fusdBalance,
        target: /storage/fusdVault
      )
    }

    self.address = currentUser.address
    let account= getAccount(self.address)
    let artCollection = currentUser.getCapability(ModernMusician.CollectionPublicPath).borrow<&{ModernMusician.ModernMusicianCollectionPublic}>()

    if artCollection == nil {

      let collection <- ModernMusician.createEmptyCollection()
      currentUser.save(<-collection, to: ModernMusician.CollectionStoragePath)
      currentUser.link<&ModernMusician.Collection{NonFungibleToken.CollectionPublic, ModernMusician.ModernMusicianCollectionPublic}>(ModernMusician.CollectionPublicPath, target: ModernMusician.CollectionStoragePath)
      log("account is initialized")
    } else {
      log("account was already initialized")
    }
  }
  post {

    getAccount(self.address).getCapability(ModernMusician.CollectionPublicPath).borrow<&{ModernMusician.ModernMusicianCollectionPublic}>() != nil : "Account is not initialized"
    

  }
}