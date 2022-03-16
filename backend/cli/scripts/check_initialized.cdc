import NonFungibleToken from 0xfb7fb8b56a762069
import ModernMusician from 0x2ea2c7c6aad5697c


pub fun main(address:Address) : Bool {
    let account = getAccount(address)
    let res = ModernMusician.checkInitialized(address: address)
    return res
}