import { Keypair } from "stellar-sdk";
import setKeypair from "./setKeypair";
import { ISetKeyPair } from "../types/types";

function registerHandler({ setSecretKey, setPublicKey }: ISetKeyPair) {
  const pair = Keypair.random();
  setKeypair({ setSecretKey, setPublicKey, pair });
}

export default registerHandler;
