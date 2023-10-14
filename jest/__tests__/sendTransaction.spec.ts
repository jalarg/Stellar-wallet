import "jest";
import { expect } from "@jest/globals";
import { sendTransaction } from "../../src/actions";
import StellarSdk from "stellar-sdk";

jest.mock("stellar-sdk");

describe("sendTransaction function", () => {
  it("Should send an amount of lummens to another public key", async () => {
    // Simula el comportamiento de loadAccount para devolver una cuenta simulada
    const loadAccountMock = jest.fn();
    loadAccountMock.mockResolvedValue({
      destinationId: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
    });

    StellarSdk.Server.mockImplementation(() => ({
      loadAccount: loadAccountMock,
    }));

    await sendTransaction({
      publicKey: "GDNQCO7LX3PDR2YB5V3D7ZBOT6F3QBBXKO4E52AWIDE63Z5RAPMJWNST",
      privateKey: "SCO26FBHD2WFYB55HXQCZVRNL4UAMZZJR5VOJID2SYABAWNO5VOO77CR",
      destinationId: "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX",
      amount: "20",
    });

    expect(loadAccountMock).toHaveBeenCalledWith("destinationAccountId");
    //expect(submitTransactionMock).toHaveBeenCalled();
  });
});
