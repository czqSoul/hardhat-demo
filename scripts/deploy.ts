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

  const myAddrBalance = await provider.getBalance(
    "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"
  );
  console.log("balance", myAddrBalance);

  const PayableTest = await ethers.getContractFactory("PayableTest", signer);
  const payableTest = await PayableTest.deploy();
  await payableTest.deployed();

  const tx = await payableTest.transfer(
    "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
    ethers.utils.parseUnits("1", "ether")
  );
  const confirm = await tx.wait();
  console.log(
    `tx was successful in ${
      confirm.transactionHash
    } with gasUsed ${confirm.gasUsed.toString()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
