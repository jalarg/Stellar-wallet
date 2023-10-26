import { IHandleWalletInformationProps } from "../../types/types";
import WalletSwitcher from "../wallets/walletSwitcher";

async function handleWalletInformation({
  setIsLoading,
  setBalance,
  setPayments,
  publicKey,
  walletType,
}: IHandleWalletInformationProps) {
  if (publicKey) {
    setIsLoading(true);
    try { 
      const wallet = WalletSwitcher.createWallet({
        walletType,
        publicKey,
        secretKey: "",
      });
      const balance = await wallet.checkBalance();    
      setBalance(balance[0].balance);
      const paymentsHistory = await wallet.fetchPaymentsHistory();
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
