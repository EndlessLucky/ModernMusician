import { config } from "@onflow/fcl";

config({
  "accessNode.api": "https://access-testnet.onflow.org", // Mainnet: "https://access-mainnet-beta.onflow.org"
  "discovery.wallet": "https://flow-wallet-testnet.blocto.app/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn",
  '0xFungibleToken': "0x9a0766d93b6608b7",
  '0xFUSD': "0xe223d8a629e49c68",
  '0xNFT': "0x631e88ae7f1d7c20",
  '0xModernMusician': "0x52b1f9cebc7c0947"
})

// config({
//   "accessNode.api": "http://localhost:8080", // Mainnet: "https://access-mainnet-beta.onflow.org"
//   "discovery.wallet": "http://localhost:8701/fcl/authn", // Mainnet: "https://fcl-discovery.onflow.org/authn",
//   '0xFungibleToken': "0xee82856bf20e2aa6",
//   '0xFUSD': "0xf8d6e0586b0a20c7",
//   '0xNFT': "0xf8d6e0586b0a20c7",
//   '0xModernMusician': "0xf8d6e0586b0a20c7",
// })