import { minimumBalance, checkBalance } from "../stellar";
import { IMiniumBalanceHandler } from "../../types/types";

const miniumBalanceHandler = async ({
  publicKey,
  setBalance,
  setIsLoading,
}: IMiniumBalanceHandler) => {
  if (publicKey) {
    setIsLoading(true);
    await minimumBalance(publicKey);
    await checkBalance(publicKey)
      .then((res: any[]) => setBalance(res[0].balance))
      .catch((err: string) => setBalance("0"));

    setIsLoading(false);
  }
};

export default miniumBalanceHandler;
