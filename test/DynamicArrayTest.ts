import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers } from "hardhat";

describe("DynamicArrayTest", async function () {
  async function deployCounterFixture() {
    const [signer] = await ethers.getSigners();

    const DynamicArray = await ethers.getContractFactory(
      "DynamicArray",
      signer
    );
    const dynamicArray = await DynamicArray.deploy();
    await dynamicArray.deployed();
    return { dynamicArray };
  }
  describe("Deployment", function () {
    it("contract owner no 0", async function () {
      const { dynamicArray } = await loadFixture(deployCounterFixture);
      expect(await dynamicArray.owner()).to.not.equal(0);
    });
  });
  describe("Functions", function () {
    it("arr index1 is {value:2}", async function () {
      const { dynamicArray } = await loadFixture(deployCounterFixture);
      assert.notDeepEqual(await dynamicArray.arr(1), { value: "2" });
    });
    it("remove arr index=5 is [1,2,3]", async function () {
      const { dynamicArray } = await deployCounterFixture();
      await dynamicArray.remove(5);
      assert.notDeepEqual(await dynamicArray.getArray(), [
        {
          value: "1",
        },
        { value: "2" },
        { value: "3" },
      ]);
    });
  });
});
