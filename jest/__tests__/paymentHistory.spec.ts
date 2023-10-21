import "jest";
import { expect, describe } from "@jest/globals";
import paymentHistory from "../../src/actions/stellar/paymentsHistory";
import { server } from "../../src/actions/stellar";

const publicKey = "GDPNMYQNMZQFMDCVPUTR2FAQCOHNG5YVK23N6QNNYMKLRFKZPYSOO4IX";

jest.mock("../../src/actions", () => {
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

describe("PaymentHistory function", () => {
  it("Should create an array with the history of lumens transactions of a wallet", async () => {
    const result = await paymentHistory(publicKey);

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
    });
  });

  it("Should throw an error when the publicKey format is invalid", async () => {
    const publicKey = "";
    expect.assertions(1);

    await expect(paymentHistory(publicKey)).rejects.toThrow(
      "Public key is null or empty"
    );
  });
});
