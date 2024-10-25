import { IBalance } from "../../types/types";
import isValidPublicKey from "../../validations/isValidPublicKey";
import { server } from "./";

async function checkBalance(publicKey: string) {
  try {
    const accountBalance = await server.loadAccount(publicKey);
    const balances = accountBalance.balances.map(
      ({ asset_type, balance }: IBalance) => ({
        asset_type,
        balance,
      })
    );
    return balances;
  } catch (err: any) {
    if (!isValidPublicKey(publicKey)) {
      throw new Error("Please provide a public key in the correct format.");
    }
    throw new Error("Account not found. Please check the public key.");
  }
}

export default checkBalance;
