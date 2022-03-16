import * as fcl from '@onflow/fcl'

export function configFCL() {
  fcl.config({
    'accessNode.api': process.env.FCL_APP_ACCESS_NODE,
    'discovery.wallet': process.env.FCL_WALLET_DISCOVERY,
    '0xFungibleToken': process.env.FT_CONTRACT,
    '0xFUSD': process.env.FUSD_CONTRACT,
    '0xNFT': process.env.NFT_CONTRACT,
    '0xModernMusician': process.env.MODERNMUSICIAN_CONTRACT_ADDRESS,
    '0xModernMusicianStorefront': process.env.STORE_FRONT_CONTRACT_ADDRESS
  })
}

export default fcl