import NonFungibleToken from "../contracts/NonFungibleToken.cdc"
import ModernMusician from "../contracts/ModernMusician.cdc"

transaction(recipient: Address,name: String,ipfsLink: String) {
    let minter: &ModernMusician.NFTMinter
    let receiver: &AnyResource{NonFungibleToken.CollectionPublic}

    prepare(signer: AuthAccount) {

        let recipientAcc = getAccount(recipient)

        self.receiver = recipientAcc
            .getCapability(ModernMusician.CollectionPublicPath)!
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        self.minter = signer.borrow<&ModernMusician.NFTMinter>(from: ModernMusician.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
        

    }

    execute {
        // let recipient = getAccount(recipient)

        // let receiver = recipient
        //     .getCapability(ProvenancedTest1.CollectionPublicPath)!
        //     .borrow<&{NonFungibleToken.CollectionPublic}>()
        //     ?? panic("Could not get receiver reference to the NFT Collection")

        self.minter.mintNFT(recipient: self.receiver, name: name,ipfsLink:ipfsLink)
        
        log("NFT Minted and deposited to ".concat(recipient.toString()))

    }
}