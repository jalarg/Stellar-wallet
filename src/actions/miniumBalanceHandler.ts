import { minimumBalance, checkBalance } from "../actions";
import { IMiniumBalanceHandler } from "../types/types";

const miniumBalanceHandler = async ({
  publicKey,
  setBalance,
}: IMiniumBalanceHandler) => {
  if (publicKey) {
    await minimumBalance(publicKey);
    await checkBalance(publicKey)
      .then((res) => setBalance(res[0].balance))
      .catch((err) => setBalance("0"));
  }
};

export default miniumBalanceHandler
