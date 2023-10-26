import "jest";
import { expect, describe } from "@jest/globals";
import { server } from "../../src/actions/stellar";
import WalletSwitcher from "../../src/actions/wallets/walletSwitcher";

const publicKey = "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX";

jest.mock("../../src/actions/stellar", () => {
  const paymentsMock = jest.fn().mockReturnValue({
    forAccount: jest.fn().mockReturnValue({
      stream: jest.fn((options) => {
        const onmessage = options.onmessage;
        const onerror = options.onerror;
        onmessage({
          to: publicKey,
          asset_type: "native",
          amount: "10.0000000",
          from: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
        });
      }),
    }),
  });

  return {
    server: {
      payments: paymentsMock,
    },
  };
});

describe("PaymentsHistory function", () => {
  it("Should create an array with the history of lumens transactions of a wallet", async () => {
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: publicKey,
      secretKey: "",
    });
    const result = await wallet.getPaymentsHistory();

    expect(server.payments).toHaveBeenCalledTimes(1);
    expect(server.payments().forAccount).toHaveBeenCalledTimes(1);
    expect(server.payments().forAccount).toHaveBeenCalledWith(publicKey);
    expect(
      server.payments().forAccount(publicKey).stream
    ).toHaveBeenCalledTimes(1);
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual({
      amount: "10.0000000",
      asset: "lumens",
      sender: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
      receiver: publicKey,
    });
  });

  it("Should throw an error when the publicKey format is invalid", async () => {
    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: "",
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
});
