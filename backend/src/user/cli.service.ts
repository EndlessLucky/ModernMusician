const { exec } = require('child_process');
import * as fcl from "@onflow/fcl";
import { authorizeMinter, sendTx } from "lib/authorization";
import {SELL_ITEM} from '../cadence/sell_item'
import { MINT_NFT } from '../cadence/mint_nft'
import { configFCL } from "lib/fcl";
import { TRANSFER_NFT } from '../cadence/transfer_nft'

let isMinting: boolean = false;

export function getAccountNFTs(
  address: string,
): Promise<[] | null | string | undefined> {
  console.log('getAccountNFTs address : ', address);

  return new Promise((resolve, reject) => {
    exec(
      `flow scripts execute ./cli/scripts/get_account_info.cdc --arg Address:"${address}" --network=testnet`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          reject(error);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          reject(stderr);
          return;
        }
        console.log(`stdout: ${stdout}`);

        const parts = stdout.split('Result: ');
        if (parts.length >= 2) {
          const res = parts[1];
          console.warn('res: ', res);
          const items = res
            .substring(1, res.length - 2)
            .split(`A.${address}.ModernMusician.NftData`);
          const validItems = items.filter((item) => item.trim() != '');
          let nfts = validItems.map((item) => {
            const parts = item.split('id: ');
            let id = '';
            if (parts.length >= 2){
              let idStr = parts[1];
              const numbers = "1234567890";
              
              for (let _char of idStr) {
                if (numbers.includes(_char)) {
                  id += _char;
                }
              }
            }

            let idNum: number = id == '' ? -1 : parseInt(id);
            return {id: idNum , data:`A.${address}.ModernMusician.NftData` + item.trim()};
          });

          nfts = nfts.sort((a,b)=>a.id < b.id ? -1 : 1);
          resolve(nfts);
        }

        resolve(null);
      },
    );
  });
}

export async function mintNft(
  address: string,
  cidMetadataLink: string,
  type: string,
): Promise<any | undefined | null> {
  // if (isMinting) {
  //   return null;
  // }
  if (!cidMetadataLink) {
    return undefined;
  }
  isMinting = true;

  configFCL()
  console.log('MINTER1', process.env.MINTER_ADDRESS);
  return new Promise(async (resolve, reject) => {
    try {
      const authorization = authorizeMinter()
      const buildRes = await sendTx(
        MINT_NFT,
        [
          fcl.arg(process.env.MINTER_ADDRESS, fcl.t.Address),
          fcl.arg("ModernMusician", fcl.t.String),
          fcl.arg(cidMetadataLink, fcl.t.String),
          fcl.arg(type, fcl.t.UInt64),
        ],
        authorization,
        [authorization],
        authorization
      )
      console.log('buildRes : ', buildRes.events[0].data.id);

      await createListing(address, buildRes.events[0].data.id, 1);

      resolve({id: buildRes.events[0].data.id});
    } catch (ex) {
      isMinting = false;
      console.error(ex);
      reject(ex);
    }
  });
}

export async function transferNft(
  receiptAddr: string,
  nftId: number
): Promise<number | undefined | null> {
  if (!receiptAddr) {
    return undefined;
  }

  isMinting = true;
  configFCL()
  console.log('MINTER1', process.env.MINTER_ADDRESS);
  return new Promise(async (resolve, reject) => {
    try {
      const authorization = authorizeMinter()
      const buildRes = await sendTx(
        TRANSFER_NFT,
        [
          fcl.arg(receiptAddr, fcl.t.Address),
          fcl.arg(nftId, fcl.t.UInt64),
        ],
        authorization,
        [authorization],
        authorization
      )
      console.log('buildRes : ', buildRes);

      isMinting = false;
            
      resolve(nftId);
    } catch (ex) {
      isMinting = false;
      console.error(ex);
      reject(ex);
    }
  });
}

export async function createListing(address, nftId, price) { 
    console.log('nftId', nftId)
    console.log('price', price)
    configFCL()
  
    const authorization = authorizeMinter()
    await sendTx(
      SELL_ITEM,
      [
        fcl.arg(address, fcl.t.Address),
        fcl.arg(parseInt(nftId), fcl.t.UInt64),
        fcl.arg(parseFloat(price).toFixed(2), fcl.t.UFix64),
      ],
      authorization,
      [authorization],
      authorization
    )
}