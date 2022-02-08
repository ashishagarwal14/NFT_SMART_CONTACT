const { ethers } = require("hardhat")
const FUNCKYTOWNJSON = require("../artifacts/contracts/FUNCKYTOWN.sol/FUNCKYTOWN.json")

async function main() {
    const abi = FUNCKYTOWNJSON.abi
    const provider = new ethers.providers.InfuraProvider("rinkeby", process.env.PROJECT_ID)
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)
    const signer = wallet.connect(provider)
    const FUNCKYTOWN = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer)
    await FUNCKYTOWN.mint("http://ipfs.io/ipfs/QmXg7aBapLqLMtEN3zRceUQJpMpyYQfDkmUbgwjZzqGF1W")
    console.log('NFT minted!')

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
