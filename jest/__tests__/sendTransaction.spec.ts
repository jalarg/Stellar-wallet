import "jest";
import { expect, describe } from "@jest/globals";
import { server } from "../../src/actions/stellar";
import stellarSdk from "stellar-sdk";
import { ISendTransactionFunction } from "@/types/types";
import WalletSwitcher from "../../src/actions/wallets/walletSwitcher";

jest.mock("stellar-sdk", () => {
  return {
    Asset: {
      native: jest.fn(),
    },
    TransactionBuilder: jest.fn(() => {
      return {
        addOperation: jest.fn().mockReturnThis(),
        setTimeout: jest.fn().mockReturnThis(),
        build: jest.fn().mockReturnThis(),
        sign: jest.fn().mockReturnThis(),
      };
    }),
    Keypair: {
      fromSecret: jest
        .fn()
        .mockReturnValueOnce({
          secret: "SCO26FBHD2WFYB55HXQCZVRNL4UAMZZJR5VOJID2SYABAWNO5VOO77CR",
        })
        .mockReturnThis(),
    },
    Networks: {
      TESTNET: "testnet",
    },
    Operation: {
      payment: jest.fn(),
    },
    BASE_FEE: 100,
  };
});

jest.mock("../../src/actions/stellar", () => {
  return {
    server: {
      loadAccount: jest.fn(),
      submitTransaction: jest.fn(),
    },
  };
});

const sendTransactionInformation = {
  publicKey: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
  privateKey: "SCO26FBHD2WFYB55HXQCZVRNL4UAMZZJR5VOJID2SYABAWNO5VOO77CR",
  destinationId: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
  amount: "20",
};

describe("SendTransaction function", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should create a transaction of lummens between two wallets", async () => {
    (server.loadAccount as jest.Mock)
      .mockResolvedValueOnce({
        account_id: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
        balances: [
          {
            balance: "10130.0000000",
            buying_liabilities: "0.0000000",
            selling_liabilities: "0.0000000",
            asset_type: "native",
          },
        ],
        signers: [
          {
            weight: 1,
            key: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
            type: "ed25519_public_key",
          },
        ],
      })
      .mockResolvedValueOnce({
        account_id: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
        balances: [
          {
            balance: "9789.9998600",
            buying_liabilities: "0.0000000",
            selling_liabilities: "0.0000000",
            asset_type: "native",
          },
        ],
        signers: [
          {
            weight: 1,
            key: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
            type: "ed25519_public_key",
          },
        ],
      });

    (server.submitTransaction as jest.Mock).mockResolvedValueOnce({
      envelope_xdr:
        "AAAAAgAAAADbATvrvt446wHtdj/kLp+LuAQ3U7hO6BZAye3nsQPYmwAAAGQAHeFOAAAAHQAAAAEAAAAAAAAAAAAAAABlLtMFAAAAAAAAAAEAAAAAAAAAAQAAAADe1mINZmBWDFV9Jx0UEBOO03cVVrbfQa3DFLiVWX4k5wAAAAAAAAAADuaygAAAAAAAAAABsQPYmwAAAEApfxVF9cIgHoa6v+qe+gQ9QrC90jxPMmoxGeSl8pMH+wB0HK9+7P16OeD+/3ZHZJN+mY/nuAjAOX4BrKcWDEkA",
      result_xdr: "AAAAAAAAAGQAAAAAAAAAAQAAAAAAAAABAAAAAAAAAAA=",
      result_meta_xdr:
        "AAAAAwAAAAAAAAACAAAAAwAfcjQAAAAAAAAAANsBO+u+3jjrAe12P+Qun4u4BDdTuE7oFkDJ7eexA9ibAAAAFiRmy6wAHeFOAAAAHAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAMAAAAAAB9yFwAAAABlLtG1AAAAAAAAAAEAH3I0AAAAAAAAAADbATvrvt446wHtdj/kLp+LuAQ3U7hO6BZAye3nsQPYmwAAABYkZsusAB3hTgAAAB0AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAfcjQAAAAAZS7SVAAAAAAAAAABAAAABAAAAAMAH3I0AAAAAAAAAADbATvrvt446wHtdj/kLp+LuAQ3U7hO6BZAye3nsQPYmwAAABYkZsusAB3hTgAAAB0AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAADAAAAAAAfcjQAAAAAZS7SVAAAAAAAAAABAB9yNAAAAAAAAAAA2wE7677eOOsB7XY/5C6fi7gEN1O4TugWQMnt57ED2JsAAAAWFYAZLAAd4U4AAAAdAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAwAAAAAAH3I0AAAAAGUu0lQAAAAAAAAAAwAfchcAAAAAAAAAAN7WYg1mYFYMVX0nHRQQE47TdxVWtt9BrcMUuJVZfiTnAAAAGGyG+QAAHeSlAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAfcjQAAAAAAAAAAN7WYg1mYFYMVX0nHRQQE47TdxVWtt9BrcMUuJVZfiTnAAAAGHttq4AAHeSlAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
    });

    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: sendTransactionInformation.publicKey,
      secretKey: sendTransactionInformation.privateKey,
    });

    const result = await wallet.sendTransaction({
      destinationId: sendTransactionInformation.destinationId,
      amount: sendTransactionInformation.amount,
    } as ISendTransactionFunction);

    expect(server.loadAccount).toHaveBeenCalledTimes(2);
    expect(server.loadAccount).toHaveBeenNthCalledWith(
      1,
      sendTransactionInformation.destinationId
    );
    expect(server.loadAccount).toHaveBeenNthCalledWith(
      2,
      sendTransactionInformation.publicKey
    );
    expect(stellarSdk.TransactionBuilder).toHaveBeenCalledTimes(1);
    expect(server.submitTransaction).toHaveBeenCalledTimes(1);
  });

  it("Should throw an error when the destination account does not exist", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error");
    const destinationId =
      "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IXGF";

    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
      secretKey: "SCO26FBHD2WFYB55HXQCZVRNL4UAMZZJR5VOJID2SYABAWNO5VOO77CR",
    });

    await wallet.sendTransaction({
      destinationId: destinationId,
      amount: "20",
    } as ISendTransactionFunction);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("ERROR!"),
      expect.objectContaining({
        message: "The destination account does not exist!",
      })
    );
  });

  it("Should throw an error when the destination account does not exist", async () => {
    const consoleErrorSpy = jest.spyOn(console, "error");
    const publicKey =
      "GDPNMYQNMZQFMDCVPUTR2FAQCOHNAB5YVK23N6QNNYMKLRFKZPYSOO4IXGF";

    (server.loadAccount as jest.Mock).mockResolvedValueOnce({
      account_id: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
      balances: [
        {
          balance: "10130.0000000",
          buying_liabilities: "0.0000000",
          selling_liabilities: "0.0000000",
          asset_type: "native",
        },
      ],
      signers: [
        {
          weight: 1,
          key: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
          type: "ed25519_public_key",
        },
      ],
    });

    const wallet = WalletSwitcher.createWallet({
      walletType: "privateKey",
      publicKey: publicKey,
      secretKey: "SCO26FBHD2WFYB55HXQCZVRNL4UAMZZJR5VOJID2SYABAWNO5VOO77CR",
    });

    await wallet.sendTransaction({
      destinationId: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
      amount: "20",
    } as ISendTransactionFunction);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining("ERROR!"),
      expect.objectContaining({
        message: "The sender account does not exist!",
      })
    );
  });
});
