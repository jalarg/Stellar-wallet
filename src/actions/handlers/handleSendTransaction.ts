import { sendTransaction } from "../stellar";
import handleWalletInformation from "./handleWalletInformation";
import {
  ISendTransactionFunction,
  ISendTransactionHandler,
} from "../../types/types";
import { message } from "antd";
import albedo from "@albedo-link/intent";

async function handleSendTransaction({
  publicKey,
  privateKey,
  amount,
  destinationId,
  onClose,
  setBalance,
  setIsLoading,
  setPayments,
  isAlbedo,
}: ISendTransactionHandler) {
  if (isAlbedo && onClose && setBalance) {
    setIsLoading(true);
    albedo
      .pay({
        destination: destinationId,
        network: "testnet",
        amount,
        submit: true,
      })
      .then(async (result: any) => {
        if (result) {
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
      });
    onClose();
    setIsLoading(false);
  }
  if (privateKey && onClose && setBalance) {
    setIsLoading(true);
    await sendTransaction({
      publicKey,
      privateKey,
      amount,
      destinationId,
      isAlbedo,
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
}

export default handleSendTransaction;
