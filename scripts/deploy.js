const hre = require("hardhat");

async function main() {
  const NAME = "Etherficate_NFT"
  const SYMBOL = "ECERT"
  const COST = ethers.utils.parseUnits("0.7", "ether") // 1 ETH

  const NFT = await hre.ethers.getContractFactory("NFT")
  const nft = await NFT.deploy(NAME, SYMBOL, COST)
  await nft.deployed()

  console.log(`Deployed NFT Contract at: ${nft.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
