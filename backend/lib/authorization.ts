import fcl from './fcl'
import { ec as EC } from 'elliptic'
import { SHA3 } from 'sha3'

const ec = new EC('p256')

export const authorizeMinter = () => {

  const { MINTER_ADDRESS, MINTER_PRIVATE_KEY, MINTER_ACCOUNT_KEY_INDEX } =
    process.env
  return async (account = {}) => {
    const user = await getAccount(MINTER_ADDRESS as string)
    const key = user.keys[MINTER_ACCOUNT_KEY_INDEX as string]

    const sign = signWithKey
    const pk = MINTER_PRIVATE_KEY

    return {
      ...account,
      tempId: `${user.address}-${key.index}`,
      addr: fcl.sansPrefix(user.address),
      keyId: Number(key.index),
      signingFunction: (signable: any) => {
        return {
          addr: fcl.withPrefix(user.address),
          keyId: Number(key.index),
          signature: sign(pk, signable.message)
        }
      }
    }
  }
}

export const getAccount = async (addr: string) => {
  const { account } = await fcl.send([fcl.getAccount(addr)])
  return account
}

const signWithKey = (privateKey: any, msg: string) => {
  const key = ec.keyFromPrivate(Buffer.from(privateKey, 'hex'))
  const sig = key.sign(hashMsg(msg))
  const n = 32
  const r = sig.r.toArrayLike(Buffer, 'be', n)
  const s = sig.s.toArrayLike(Buffer, 'be', n)
  return Buffer.concat([r, s]).toString('hex')
}

const hashMsg = (msg: string) => {
  const sha = new SHA3(256)
  sha.update(Buffer.from(msg, 'hex'))
  return sha.digest()
}

export const sendTx = async (
  transaction: string,
  args: any,
  proposer: any,
  authorizations: any,
  payer: any
) => {
  const response = await fcl.send([
    fcl.transaction`
        ${transaction}
      `,
    fcl.args(args),
    fcl.proposer(proposer),
    fcl.authorizations(authorizations),
    fcl.payer(payer),
    fcl.limit(9999)
  ])

  return await fcl.tx(response).onceSealed()
}
