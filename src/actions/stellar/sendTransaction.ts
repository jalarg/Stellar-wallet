import StellarSdk from "stellar-sdk";
import { BASE_FEE, Networks } from "stellar-sdk";
import { ISendTransactionFunction } from "../../types/types";
import { server } from "./";

async function sendTransaction({
  publicKey,
  privateKey,
  destinationId,
  amount,
  isAlbedo,
}: ISendTransactionFunction) {
  try {
    const destinationAccount = await server.loadAccount(destinationId);
    if (!destinationAccount) {
      throw new Error("The destination account does not exist!");
    }
    const senderAccount = await server.loadAccount(publicKey);
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

    const keyPair = StellarSdk.Keypair.fromSecret(privateKey);
    transaction.sign(keyPair);
    const transactionResult = await server.submitTransaction(transaction);
    return JSON.stringify(transactionResult, null, 2);
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default sendTransaction;
