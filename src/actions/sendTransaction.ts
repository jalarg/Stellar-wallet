import StellarSdk from "stellar-sdk";
import { ISendTransaction } from "../types/types";

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

async function sendTransaction({
  publicKey,
  privateKey,
  destinationId,
  amount,
}: ISendTransaction) {
  try {

    const destinationAccount = await server.loadAccount(destinationId);
    if (!destinationAccount) {
      throw new Error("The destination account does not exist!");
    }
    const senderAccount = await server.loadAccount(publicKey);
    const transactionBuilder = new StellarSdk.TransactionBuilder(
      senderAccount,
      {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.TESTNET,
      }
    );

    transactionBuilder
      .addOperation(
        StellarSdk.Operation.payment({
          destination: destinationId,
          asset: StellarSdk.Asset.native(),
          amount: amount,
        })
      )
      .setTimeout(180);

    const transaction = transactionBuilder.build();


    const keyPair = StellarSdk.Keypair.fromSecret(privateKey);
    transaction.sign(keyPair);

    const transactionResult = await server.submitTransaction(transaction);
    console.log(JSON.stringify(transactionResult, null, 2));
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default sendTransaction;
