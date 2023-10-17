import "jest";
import { expect } from "@jest/globals";
import setKeypair from "../../src/actions/setKeypair";
import { Keypair } from "stellar-sdk";

describe("SetKeypair function", () => {
  it("Should set secret and public key when given a key pair", () => {
    const setSecret = jest.fn();
    const setPublicKey = jest.fn();
    const realPair = Keypair.random();

    setKeypair({ setSecret, setPublicKey, pair: realPair });

    expect(setSecret).toHaveBeenCalledWith(realPair.secret());
    expect(setPublicKey).toHaveBeenCalledWith(realPair.publicKey());
  });

  it("Should set null for secret and public key when not given a key pair", () => {
    const setSecret = jest.fn();
    const setPublicKey = jest.fn();
    setKeypair({ setSecret, setPublicKey, pair: undefined });

    expect(setSecret).toHaveBeenCalledWith(null);
    expect(setPublicKey).toHaveBeenCalledWith(null);
  });
});
