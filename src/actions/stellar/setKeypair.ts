import { Keypair } from "stellar-sdk";
import { ISetKeyPair } from "../../types/types";

export interface SetKeypairProps extends ISetKeyPair {
  pair?: Keypair | undefined;
}

function setKeypair({ setSecretKey, setPublicKey, pair }: SetKeypairProps) {
  if (pair) {
    const secret = pair?.secret();
    const publicKey = pair?.publicKey();
    setSecretKey(secret);
    setPublicKey(publicKey);
  } else {
    setSecretKey(null);
    setPublicKey(null);
  }
}
export default setKeypair;
