import PrivateKeyWallet from "./privateKeyWallet";
import AlbedoWallet from "./albedoWallet";
import { IWalletSwitcher } from "../../types/types";

export default class WalletSwitcher {
  static createWallet(authCredentials: IWalletSwitcher) {
    const { walletType, publicKey, secretKey } = authCredentials;
    switch (walletType) {
      case "privateKey":
        return new PrivateKeyWallet({ publicKey, secretKey });
      case "albedo":
        return new AlbedoWallet({ publicKey, secretKey });
      default:
        throw new Error("Tipo de wallet no válido");
    }
  }
}
