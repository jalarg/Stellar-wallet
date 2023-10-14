import "jest";
import { expect } from "@jest/globals";
import { checkBalance } from "../../src/actions";


describe("checkBalance function", () => {
  it("should load and log account balance of lummens", async () => {
    const publicKey =
      "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST";
    const balance = await checkBalance(publicKey);
    expect(balance).toBeInstanceOf(Array);
    expect(balance[0]).toHaveProperty("asset_type");
    expect(balance[0]).toHaveProperty("balance");
  });

  it("should throw an error when the publicKey format is invalid", async () => {
    // Define an invalid public key (empty string)
    const publicKey = "";
    expect.assertions(1);
    try {
      await checkBalance(publicKey);
    } catch (error: any) {
      expect(error.message).toEqual(
        "Please provide a public key in the correct format."
      );
    }
  });

  it("should throw an error when the account is not found", async () => {
    const publicKey =
      "GBWC6SYNRSCGP4C74GM3JO5Z4KGC2KWMS4THDK73R2UI3BE2LJYE66Z7";
    expect.assertions(1);
    try {
      await checkBalance(publicKey);
    } catch (error: any) {
      expect(error.message).toEqual(
        "Account not found. Please check the public key."
      );
    }
  });
});
