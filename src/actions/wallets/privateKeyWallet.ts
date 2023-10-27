import { ISendTransactionFunction } from "../../types/types";
import { Keypair } from "stellar-sdk";
import { server } from "../stellar";
import StellarSdk from "stellar-sdk";
import { BASE_FEE, Networks } from "stellar-sdk";
import { login } from "../../globalRedux/store";

interface IWallet {
  publicKey: string;
  secretKey: string;
}

interface ILogin {
  secretKey: string;
  dispatch: (action: any) => void;
}

export default class PrivateKeyWallet {
  publicKey: string;
  secretKey: string;

  constructor({ publicKey, secretKey }: IWallet) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
  }

  async login({ dispatch, secretKey }: ILogin) {
    const publicKey = Keypair.fromSecret(secretKey).publicKey();
    dispatch(
      login({
        walletType: "privateKey",
        walletCredentials: {
          publicKey: publicKey,
          secretKey: secretKey,
        },
      })
    );
  }

  async sendTransaction({ destinationId, amount }: ISendTransactionFunction) {
    try {
      const destinationAccount = await server.loadAccount(destinationId);
      if (!destinationAccount) {
        throw new Error("The destination account does not exist!");
      }
      const senderAccount = await server.loadAccount(this.publicKey);
      if (!senderAccount) {
        throw new Error("The sender account does not exist!");
      }

      const transactionBuilder = new StellarSdk.TransactionBuilder(
        senderAccount,
        {
          fee: BASE_FEE,
          networkPassphrase: Networks.TESTNET,
        }
      );

      const transaction = transactionBuilder
        .addOperation(
          StellarSdk.Operation.payment({
            destination: destinationId,
            asset: StellarSdk.Asset.native(),
            amount: amount,
          })
        )
        .setTimeout(180)
        .build();

      const keyPair = StellarSdk.Keypair.fromSecret(this.secretKey);
      transaction.sign(keyPair);
      const transactionResult = await server.submitTransaction(transaction);
      return JSON.stringify(transactionResult, null, 2);
    } catch (err) {
      console.error("ERROR!", err);
    }
  }
}
