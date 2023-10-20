import "jest";
import { expect } from "@jest/globals";
import setKeypair from "../../src/actions/setKeypair";
import { Keypair } from "stellar-sdk";
import { ISetKeyPair } from "@/types/types";

describe("SetKeypair function", () => {
  it("Should set secret and public key when given a key pair", () => {
    const setSecretKey = jest.fn(); 
    const setPublicKey = jest.fn();
    const realPair = Keypair.random();

    setKeypair({ setSecretKey, setPublicKey, pair: realPair }); 

    expect(setSecretKey).toHaveBeenCalledWith(realPair.secret());
    expect(setPublicKey).toHaveBeenCalledWith(realPair.publicKey());
  });

  it("Should set null for secret and public key when not given a key pair", () => {
    const setSecretKey = jest.fn(); 
    const setPublicKey = jest.fn();
    setKeypair({ setSecretKey, setPublicKey, pair: undefined }); 

    expect(setSecretKey).toHaveBeenCalledWith(null);
    expect(setPublicKey).toHaveBeenCalledWith(null);
  });
});
