import PrivateKeyWallet from "./privateKeyWallet";
import albedo from "@albedo-link/intent";

interface IWallet {
  publicKey: string;
  secretKey: string;
}

interface IAlbedo {
  destinationId: string;
  amount: string;
}

export default class Albedo extends PrivateKeyWallet {
  constructor({ publicKey, secretKey }: IWallet) {
    super({ publicKey, secretKey });
  }
  async sendTransaction({ destinationId, amount }: IAlbedo): Promise<any> {
    const result = await albedo.pay({
      destination: destinationId,
      amount,
      network: "testnet",
      submit: true,
    });
    return result;
  }
}
