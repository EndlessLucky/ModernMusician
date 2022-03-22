export const GET_ACCOUNT = `
import NonFungibleToken from 0xNFT
import ModernMusician from 0xModernMusician      

pub fun main(address:Address) : [ModernMusician.NftData] {
    let account = getAccount(address)
    let nft = ModernMusician.getNft(address: address)
    return nft
}`