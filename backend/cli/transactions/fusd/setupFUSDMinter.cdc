 // This transaction creates a new minter proxy resource and
// stores it in the signer's account.
//
// After running this transaction, the FUSD administrator
// must run deposit_fusd_minter.cdc to deposit a minter resource
// inside the minter proxy.

import FUSD from "../../contracts/FUSD.cdc"

transaction {

  prepare(minter: AuthAccount) {

    let mintAdminCap = minter
      .borrow<&FUSD.Administrator>(from: FUSD.AdminStoragePath)
      ?? panic("User is not an admin")

    minter.save(
      <- mintAdminCap.createNewMinter(), 
      to: FUSD.MinterStoragePath,
    )

    minter.link<&FUSD.Minter>(
      FUSD.MinterPublicPath,
      target: FUSD.MinterStoragePath
    )

    minter.save(
      <- FUSD.createMinterProxy(), 
      to: FUSD.MinterProxyStoragePath,
    )
    
    minter.link<&FUSD.MinterProxy{FUSD.MinterProxyPublic}>(
      FUSD.MinterProxyPublicPath,
      target: FUSD.MinterProxyStoragePath
    )

    let mintProxyCap = minter
      .borrow<&FUSD.MinterProxy>(from: FUSD.MinterProxyStoragePath)
      ?? panic("No minter available")

    let mintCap = minter.getCapability<&FUSD.Minter>(FUSD.MinterPublicPath)

    mintProxyCap.setMinterCapability(cap: mintCap)

  }
}