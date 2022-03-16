import NonFungibleToken from 0xfb7fb8b56a762069
import ModernMusician from 0x2ea2c7c6aad5697c


pub fun main(address:Address) : [ModernMusician.NftData] {
    let account = getAccount(address)
    let nft = ModernMusician.getNft(address: address)
    return nft
}