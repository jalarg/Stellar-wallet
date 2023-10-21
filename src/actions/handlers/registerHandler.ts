import { Keypair } from "stellar-sdk";
import setKeypair from "../stellar/setKeypair";
import { ISetKeyPair } from "../../types/types";

function registerHandler({
  setSecretKey,
  setPublicKey,
  openModal,
}: ISetKeyPair) {
  const pair = Keypair.random();
  setKeypair({ setSecretKey, setPublicKey, pair });
  if (openModal) {
    openModal("confirmWallet");
  }
}

export default registerHandler;
