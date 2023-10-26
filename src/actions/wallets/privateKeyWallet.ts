import { ISendTransactionFunction } from "../../types/types";
import {
  checkBalance,
  getPaymentsHistory,
  sendTransaction,
} from "../stellar";

interface IWallet {
  publicKey: string;
  secretKey: string;
}

export default class PrivateKeyWallet {
  publicKey: string;
  secretKey: string;

  constructor({
    publicKey,
    secretKey,  
  }: IWallet) {
    this.publicKey = publicKey;
    this.secretKey = secretKey;  
  }
  
  async checkBalance() {
    const balance = await checkBalance(this.publicKey);
    return balance;
  }

  async fetchPaymentsHistory() {
    const paymentsHistory = await getPaymentsHistory(this.publicKey);
    return paymentsHistory;
  }  

  async sendTransaction({
    destinationId,
    amount,
  }: ISendTransactionFunction) {
    const result = await sendTransaction({
      publicKey: this.publicKey,
      privateKey: this.secretKey,
      destinationId,
      amount,
    });
    return result;
  }  
}
