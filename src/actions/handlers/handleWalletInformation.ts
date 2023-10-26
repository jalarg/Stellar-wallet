import { IHandleWalletInformationProps } from "../../types/types";
import { checkBalance, getPaymentsHistory } from "../stellar";

async function handleWalletInformation({
  setIsLoading,
  setBalance,
  setPayments,
  publicKey,
}: IHandleWalletInformationProps) {
  if (publicKey) {
    setIsLoading(true);
    try {
      const balance = await checkBalance(publicKey);
      setBalance(balance[0].balance);
      const paymentsHistory = await getPaymentsHistory(publicKey);
      setPayments(paymentsHistory);
      setIsLoading(false);
    } catch (error) {
      setBalance("0");
      setPayments(null);
    }
    setIsLoading(false);
  }
}

export default handleWalletInformation;
