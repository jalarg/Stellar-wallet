import { sendTransaction } from "../stellar";
import handleWalletInformation from "./handleWalletInformation";
import {
  ISendTransactionFunction,
  ISendTransactionHandler,
} from "../../types/types";
import { message } from "antd";

const sendTransactionHandler = async ({
  publicKey,
  privateKey,
  amount,
  destinationId,
  onClose,
  setBalance,
  setIsLoading,
  setPayments,
}: ISendTransactionHandler) => {
  if (privateKey && onClose && setBalance) {
    setIsLoading(true);
    await sendTransaction({
      publicKey,
      privateKey,
      amount,
      destinationId,
    } as ISendTransactionFunction);
    await handleWalletInformation({
      setIsLoading,
      setBalance,
      setPayments,
      publicKey,
    });
    message.success("Transaction sent successfully");
    onClose();
    setIsLoading(false);
  }
};

export default sendTransactionHandler;
