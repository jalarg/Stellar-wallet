import { Keypair } from "stellar-sdk";
import setKeypair from "./setKeypair";
import { ISetKeyPair } from "../types/types";

function registerHandler({ setSecret, setPublicKey }: ISetKeyPair) {
  const pair = Keypair.random();
  setKeypair({ setSecret, setPublicKey, pair });
}

export default registerHandler;
