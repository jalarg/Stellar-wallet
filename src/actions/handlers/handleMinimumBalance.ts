import { minimumBalance, checkBalance } from "../stellar";
import { IMiniumBalanceHandler } from "../../types/types";
import { message } from "antd";

async function handleMinimumBalance({
  publicKey,
  setBalance,
  setIsLoading,
}: IMiniumBalanceHandler) {
  if (publicKey) {
    setIsLoading(true);
    await minimumBalance(publicKey);
    await checkBalance(publicKey)
      .then((res: any[]) => setBalance(res[0].balance))
      .catch((err: string) => setBalance("0"));

    setIsLoading(false);
    message.success("Account created successfully");
  }
}

export default handleMinimumBalance;
