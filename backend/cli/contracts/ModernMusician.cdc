import NonFungibleToken from "./NonFungibleToken.cdc"

pub contract ModernMusician: NonFungibleToken {
    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)
    pub event Minted(id: UInt64, name: String,ipfsLink: String)

    pub let CollectionStoragePath: StoragePath
    pub let CollectionPublicPath: PublicPath
    pub let MinterStoragePath: StoragePath

    pub var totalSupply: UInt64

    pub resource interface Public {
        pub let id: UInt64
        pub let metadata: Metadata
    }

    //you can extend these fields if you need
    pub struct Metadata {
        pub let name: String
        pub let ipfsLink: String

        init(name: String,ipfsLink: String) {
            self.name=name
            //Stored in the ipfs
            self.ipfsLink=ipfsLink
        }
    }

   pub resource NFT: NonFungibleToken.INFT, Public {
        pub let id: UInt64
        pub let metadata: Metadata
        pub let type: UInt64
        init(initID: UInt64,metadata: Metadata, type: UInt64) {
            self.id = initID
            self.metadata=metadata
            self.type=type
        }
    }

    pub resource interface ModernMusicianCollectionPublic {
        pub fun deposit(token: @NonFungibleToken.NFT)
        pub fun getIDs(): [UInt64]
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT
        pub fun borrowArt(id: UInt64): &ModernMusician.NFT? {
            post {
                (result == nil) || (result?.id == id):
                    "Cannot borrow ModernMusician reference: The ID of the returned reference is incorrect"
            }
        }
    }

    pub resource Collection: ModernMusicianCollectionPublic, NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic {
        pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("missing NFT")

            emit Withdraw(id: token.id, from: self.owner?.address)

            return <-token
        }

        pub fun deposit(token: @NonFungibleToken.NFT) {
            let token <- token as! @ModernMusician.NFT

            let id: UInt64 = token.id

            let oldToken <- self.ownedNFTs[id] <- token

            emit Deposit(id: id, to: self.owner?.address)

            destroy oldToken
        }


        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

        pub fun borrowArt(id: UInt64): &ModernMusician.NFT? {
            if self.ownedNFTs[id] != nil {
                let ref = &self.ownedNFTs[id] as auth &NonFungibleToken.NFT
                return ref as! &ModernMusician.NFT
            } else {
                return nil
            }
        }

        destroy() {
            destroy self.ownedNFTs
        }

        init () {
            self.ownedNFTs <- {}
        }
    }

    pub fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    pub struct NftData {
        pub let metadata: ModernMusician.Metadata
        pub let id: UInt64
        pub let type: UInt64
        init(metadata: ModernMusician.Metadata, id: UInt64, type: UInt64) {
            self.metadata= metadata
            self.id=id
            self.type=type
        }
    }

    pub fun getNft(address:Address) : [NftData] {
        var artData: [NftData] = []
        let account=getAccount(address)

        if let artCollection= account.getCapability(self.CollectionPublicPath).borrow<&{ModernMusician.ModernMusicianCollectionPublic}>()  {
            for id in artCollection.getIDs() {
                var art=artCollection.borrowArt(id: id)
                artData.append(NftData(metadata: art!.metadata, id: id, type: art!.type))
            }
        }
        return artData
    }

	pub resource NFTMinter {
		pub fun mintNFT(
		recipient: &{NonFungibleToken.CollectionPublic},
		name: String,
        ipfsLink: String,
        type: UInt64) {
            emit Minted(id: ModernMusician.totalSupply, name: name, ipfsLink: ipfsLink)

			recipient.deposit(token: <-create ModernMusician.NFT(
			    initID: ModernMusician.totalSupply,
			    metadata: Metadata(
                    name: name,
                    ipfsLink:ipfsLink,
                ),
                type: type))

            ModernMusician.totalSupply = ModernMusician.totalSupply + (1 as UInt64)
		}
	}

    init() {
        self.CollectionStoragePath = /storage/ModernMusicianCollection
        self.CollectionPublicPath = /public/ModernMusicianCollection
        self.MinterStoragePath = /storage/ModernMusicianMinter

        self.totalSupply = 0

        let minter <- create NFTMinter()
        self.account.save(<-minter, to: self.MinterStoragePath)

        let collection <- ModernMusician.createEmptyCollection()
        self.account.save(<-collection, to: ModernMusician.CollectionStoragePath)
        self.account.link<&ModernMusician.Collection{NonFungibleToken.CollectionPublic, ModernMusician.ModernMusicianCollectionPublic}>(ModernMusician.CollectionPublicPath, target: ModernMusician.CollectionStoragePath)

        emit ContractInitialized()
    }
}