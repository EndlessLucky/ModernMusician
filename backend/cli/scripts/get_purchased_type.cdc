import ModernMusicianStorefront from 0x2ea2c7c6aad5697c

pub fun main(type:UInt64) : UInt64? {
    return ModernMusicianStorefront.getNumberPurchasedByType(type: type)
}