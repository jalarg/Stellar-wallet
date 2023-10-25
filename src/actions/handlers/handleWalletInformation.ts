import { checkBalance, getPaymentsHistory } from "../stellar";
import { IHandleWalletInformationProps } from "../../types/types";

async function handleWalletInformation({
  setIsLoading,
  setBalance,
  setPayments,
  publicKey,
}: IHandleWalletInformationProps) {
  if (publicKey) {
    setIsLoading(true);
    try {
      const balanceResult = await checkBalance(publicKey);
      setBalance(balanceResult[0].balance);
      const paymentsResult = await getPaymentsHistory(publicKey);
      setPayments(paymentsResult);
      setIsLoading(false);
    } catch (error) {
      setBalance("0");
      setPayments(null);
    }
    setIsLoading(false);
  }
}

export default handleWalletInformation;
