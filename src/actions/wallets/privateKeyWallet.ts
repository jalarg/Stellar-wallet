import { ISendTransactionFunction } from "../../types/types";
import { IBalance } from "../../types/types";
import isValidPublicKey from "../../validations/isValidPublicKey";
import { server } from "../stellar";

import { getPaymentsHistory, sendTransaction } from "../stellar";

interface IWallet {
  publicKey: string;
  secretKey: string;
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

  async fetchPaymentsHistory() {
    const paymentsHistory = await getPaymentsHistory(this.publicKey);
    return paymentsHistory;
  }

  async sendTransaction({ destinationId, amount }: ISendTransactionFunction) {
    const result = await sendTransaction({
      publicKey: this.publicKey,
      privateKey: this.secretKey,
      destinationId,
      amount,
    });
    return result;
  }
}
