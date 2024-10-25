import { login } from "../../GlobalRedux/store";
import albedo from "@albedo-link/intent";

interface IWallet {
  publicKey: string;
  secretKey: string;
}

interface IAlbedo {
  destinationId: string;
  amount: string;
}

interface ILogin {
  dispatch: (action: any) => void;
}

export default class AlbedoWallet {
  publicKey: string;
  secretKey: string;

  constructor({ publicKey, secretKey }: IWallet) {
    this.publicKey = publicKey;
    this.secretKey = "";
  }

  async login({ dispatch }: ILogin) {
    return albedo
      .publicKey({})
      .then((albedoPublicKey) => {
        dispatch(
          login({
            walletType: "albedo",
            walletCredentials: {
              publicKey: albedoPublicKey.pubkey,
              secretKey: "",
            },
          })
        );
      })
      .catch((err: any) => {
        throw err;
      });
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
