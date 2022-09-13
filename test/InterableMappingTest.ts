import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect, assert } from "chai";
import { ethers } from "hardhat";

describe("InterableMappingTest", async function () {
  async function deployCounterFixture() {
    const [signer] = await ethers.getSigners();

    const InterableMapping = await ethers.getContractFactory(
      "InterableMapping",
      signer
    );
    const interableMapping = await InterableMapping.deploy();
    await interableMapping.deployed();
    return { interableMapping };
  }
  describe("InterableMappingDevelop", function () {
    it("contract owner no 0", async function () {
      const { interableMapping } = await loadFixture(deployCounterFixture);
      expect(await interableMapping.owner()).to.not.equal(0);
    });
  });
  describe("Functions", function () {
    it("set mapping", async function () {
      const { interableMapping } = await loadFixture(deployCounterFixture);
      const address = "0x4943Fba6790B4600d7aC082657AfC93157deDe45";
      await interableMapping.set(address);
      assert.isTrue(
        await interableMapping.addressMapping(address),
        "this is address error"
      );
    });
    it("get address", async function () {
      const { interableMapping } = await deployCounterFixture();

      await expect(interableMapping.getAddress(2222)).to.be.revertedWith(
        "index is too large"
      );
      //   assert.fail();
    });
  });
});
