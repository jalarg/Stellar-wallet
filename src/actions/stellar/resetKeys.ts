import { ISetKeyPair } from "../../types/types";

function resetKeys({ setSecretKey, setPublicKey }: ISetKeyPair) {
  setSecretKey(null);
  setPublicKey(null);
}

export default resetKeys;
