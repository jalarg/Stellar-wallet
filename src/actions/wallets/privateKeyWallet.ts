import { ISendTransactionFunction } from "../../types/types";
import { IBalance } from "../../types/types";
import isValidPublicKey from "../../validations/isValidPublicKey";
import { server } from "../stellar";
import StellarSdk from "stellar-sdk";
import { BASE_FEE, Networks } from "stellar-sdk";

interface IWallet {
  publicKey: string;
  secretKey: string;
}

interface IPayment {
  amount: string;
  asset: string;
  sender: string;
  receiver: string;
}

export default class PrivateKeyWallet {
  publicKey: string;
  secretKey: string;

  constructor({ publicKey, secretKey }: IWallet) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;
  }

  async checkBalance() {
    try {
      const accountBalance = await server.loadAccount(this.publicKey);
      const balances = accountBalance.balances.map(
        ({ asset_type, balance }: IBalance) => ({
          asset_type,
          balance,
        })
      );
      return balances;
    } catch (err: any) {
      if (!isValidPublicKey(this.publicKey)) {
        throw new Error("Please provide a public key in the correct format.");
      }
      throw new Error("Account not found. Please check the public key.");
    }
  }

  async getPaymentsHistory(): Promise<IPayment[]> {
    return new Promise<IPayment[]>(async (resolve, reject) => {
      try {
        if (!this.publicKey) {
          throw new Error("Public key is null or empty");
        }
        const paymentData: IPayment[] = [];
        server
          .payments()
          .forAccount(this.publicKey)
          .stream({
            onmessage: (payment: any) => {
              var asset;
              if (payment.asset_type === "native") {
                asset = "lumens";
              } else {
                asset = payment.asset_code + ":" + payment.asset_issuer;
              }

              const paymentEntry: IPayment = {
                amount: payment.amount,
                asset: asset,
                sender: payment.from,
                receiver: payment.to,
              };

              if (payment.type !== "create_account") {
                paymentData.push(paymentEntry);
                resolve(paymentData);
              }
            },
            onerror: (error: any) => {
              console.error("Error in payment stream");
              reject(error);
            },
          });
      } catch (err) {
        console.error("ERROR!", err);
        reject(err);
      }
    });
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
