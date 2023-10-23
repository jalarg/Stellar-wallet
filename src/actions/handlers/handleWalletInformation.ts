import { checkBalance, paymentsHistory } from "../stellar";

interface HandleWalletInformationProps {
  setIsLoading: (isLoading: boolean) => void;
  setBalance: (balance: string) => void;
  setPayments: (payments: any) => void;
  publicKey: string;
}

const handleWalletInformation = async ({
  setIsLoading,
  setBalance,
  setPayments,
  publicKey,
}: HandleWalletInformationProps) => {
  if (publicKey) {
    setIsLoading(true);
    try {
      const balanceResult = await checkBalance(publicKey);
      setBalance(balanceResult[0].balance);
      const paymentsResult = await paymentsHistory(publicKey);
      setPayments(paymentsResult);
    } catch (error) {
      setBalance("0");
      setPayments(null);
    }
    setIsLoading(false);
  }
};

export default handleWalletInformation;
