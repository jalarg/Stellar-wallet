import { addMinimumBalance } from "../stellar";
import { IAddMiniumBalanceHandler } from "../../types/types";
import { message } from "antd";
import { checkBalance } from "../stellar";

async function handleMinimumBalance({
  publicKey,
  setBalance,
  setIsLoading,
}: IAddMiniumBalanceHandler) {
  if (publicKey) {
    setIsLoading(true);
    await addMinimumBalance(publicKey);
    const balance = await checkBalance(publicKey);
    setBalance(balance[0].balance);
    setIsLoading(false);
    message.success("Account created successfully");
  }
}

export default handleMinimumBalance;
