const { ethers } = require("hardhat")

async function main() {
  const FUNCKYTOWN = await ethers.getContractFactory("FUNCKYTOWN")
  const funckytown = await FUNCKYTOWN.deploy("FUNCKYTOWN","CBEET")

  await funckytown.deployed()
  console.log(`contract succesfully deplyed to ${funckytown.address}`)
    

  const newItemId = await funckytown.mint("http://ipfs.io/ipfs/QmXqQawsxXc3wKrkTyDftUTeP5NzTicj6NYiCc3UPDE7EM")
  console.log(`NFTs minted succesfully :: ${newItemId} `)

}



main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
