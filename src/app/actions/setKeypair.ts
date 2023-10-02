import { Keypair } from "stellar-sdk";
import { ISetKeyPair } from "../types/types";

// Crear una nueva interfaz que extienda RegisterProps
export interface SetKeypairProps extends ISetKeyPair {
  pair?: Keypair | undefined;
}

function setKeypair({ setSecret, setPublicKey, pair }: SetKeypairProps) {
  if (pair) {
    const secret = pair?.secret();
    const publicKey = pair?.publicKey();
    setSecret(secret);
    setPublicKey(publicKey);
  } else {
    setSecret(null);
    setPublicKey(null);
  }
}
export default setKeypair;
