import { ethers } from "hardhat";

async function main() {
  const network = process.env.HARDHAT_NETWORK;
  const address = process.env.ADDRESS as string;
  console.log("network:", network);
  const provider = ethers.provider;
  const networkInfo = await provider.getNetwork();
  console.log(`networkInfo: ${JSON.stringify(networkInfo)}`);

  const signer = await ethers.getSigner();
  console.log(`connected wallet: ${signer.address}`);

  //   const myAddrBalance = await provider.getBalance(
  //     "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
  //   );

  const InterableMapping = await ethers.getContractFactory(
    "InterableMapping",
    signer
  );
  const interableMapping = await InterableMapping.deploy();
  await interableMapping.deployed();
  console.log("address:", interableMapping.address);
  //   const tx = await dynamicArray.getArray();
  //   // const confirm = await tx.wait();
  //   console.log(tx);
  //   const arrTx=await dynamicArray.remove(1);
  //   const arrConfirm
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
