
export const MINT_NFT = `
import NonFungibleToken from 0xNFT
import ModernMusician from 0xModernMusician

transaction(recipient: Address,name: String, ipfsLink: String, type: UInt64) {
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

        self.minter.mintNFT(recipient: self.receiver, name: name, ipfsLink: ipfsLink, type: type)
        
        log("NFT Minted and deposited to ".concat(recipient.toString()))

    }
}`