import { sendTransaction, checkBalance } from "../stellar";
import { ISendTransactionFunction, ISendTransactionHandler } from "../../types/types";
import { message } from "antd";

const sendTransactionHandler = async ({
  publicKey,
  privateKey,
  amount,
  destinationId,
  onClose,
  setBalance,
  setIsLoading,
}: ISendTransactionHandler) => {
  if (privateKey && onClose && setBalance) {
    setIsLoading(true);
    await sendTransaction({ publicKey, privateKey, amount, destinationId } as ISendTransactionFunction);
    await checkBalance(publicKey)
      .then((res) => setBalance(res[0].balance))
      .catch((err) => setBalance("0"));
    message.success("Transaction sent successfully");
    onClose();
    setIsLoading(false);
  }
};

export default sendTransactionHandler;
