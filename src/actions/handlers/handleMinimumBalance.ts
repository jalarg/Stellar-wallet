import { AddMinimumBalance, checkBalance } from "../stellar";
import { IAddMiniumBalanceHandler } from "../../types/types";
import { message } from "antd";

async function handleMinimumBalance({
  publicKey,
  setBalance,
  setIsLoading,
}: IAddMiniumBalanceHandler) {
  if (publicKey) {
    setIsLoading(true);
    await AddMinimumBalance(publicKey);
    await checkBalance(publicKey)
      .then((res: any[]) => setBalance(res[0].balance))
      .catch((err: string) => setBalance("0"));

    setIsLoading(false);
    message.success("Account created successfully");
  }
}

export default handleMinimumBalance;
