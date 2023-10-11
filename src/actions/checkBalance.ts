import StellarSdk from "stellar-sdk";
import { IBalance } from "../types/types";

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

async function checkBalance(publicKey: string) {
  try {
    const accountBalance = await server.loadAccount(publicKey);
    accountBalance.balances.forEach(({ asset_type, balance }: IBalance) => {
      return { publicKey, asset_type, balance };
    });
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default checkBalance;
