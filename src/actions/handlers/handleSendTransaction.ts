import { sendTransaction } from "../stellar";
import handleWalletInformation from "./handleWalletInformation";
import {
  ISendTransactionFunction,
  ISendTransactionHandler,
} from "../../types/types";
import { message } from "antd";
import albedo from "@albedo-link/intent";
import WalletSwitcher from "../wallets/walletSwitcher";

async function handleSendTransaction({
  publicKey,
  privateKey,
  amount,
  destinationId,
  onClose,
  setBalance,
  setIsLoading,
  setPayments,
  walletType,
}: ISendTransactionHandler) {
  const wallet = WalletSwitcher.createWallet({
    walletType,
    publicKey,
    secretKey: privateKey,
  });
  setIsLoading(true);
  await wallet.sendTransaction({
    destinationId,
    amount,
  } as ISendTransactionFunction);

  await handleWalletInformation({
    setIsLoading,
    setBalance,
    setPayments,
    publicKey,
    walletType,
  });

  message.success("Transaction sent successfully");
  onClose();
  setIsLoading(false);
}

export default handleSendTransaction;
