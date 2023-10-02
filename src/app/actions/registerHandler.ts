import { Keypair } from "stellar-sdk";
import setKeypair from "./setKeypair";
import { ISetKeyPair } from "../types/types";

function registerHandler({ setSecret, setPublicKey }: ISetKeyPair) {
  // Call create random pair of keys
  const pair = Keypair.random();
  // set states of keypair
  setKeypair({ setSecret, setPublicKey, pair });
}

export default registerHandler;
