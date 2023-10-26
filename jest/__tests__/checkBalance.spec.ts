import "jest";
import { expect } from "@jest/globals";
import WalletSwitcher from "../../src/actions/wallets/walletSwitcher";

describe("CheckBalance function", () => {
  it("Should load and log account balance of lummens", async () => {
    const publicKey =
      "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST";
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey,
      secretKey: "",
    });

    const balance = await wallet.checkBalance();
    expect(balance).toBeInstanceOf(Array);
    expect(balance[0]).toHaveProperty("asset_type");
    expect(balance[0]).toHaveProperty("balance");
  });

  it("Should throw an error when the publicKey format is invalid", async () => {
    const publicKey = "";
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey,
      secretKey: "",
    });
    
    try {
      await wallet.checkBalance();
    } catch (error: any) {
      expect(error.message).toBe(
        "Please provide a public key in the correct format."
      );
    }
  });

  it("Should throw an error when the account is not found", async () => {
    const publicKey =
      "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST";
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey,
      secretKey: "",
    });

    try {
      await wallet.checkBalance();
    } catch (error: any) {
      expect(error.message).toBe(
        "Account not found. Please check the public key."
      );
    }
  });
});
