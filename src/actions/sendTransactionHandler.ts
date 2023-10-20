import { sendTransaction, checkBalance } from "../actions";
import { ISendTransactionFunction } from "../types/types";
import { message } from "antd";

const sendTransactionHandler = async ({
  publicKey,
  privateKey,
  amount,
  destinationId,
  onClose,
  setBalance,
}: ISendTransactionFunction) => {
  if (privateKey && onClose && setBalance) {
    await sendTransaction({ publicKey, privateKey, amount, destinationId });
    await checkBalance(publicKey)
      .then((res) => setBalance(res[0].balance))
      .catch((err) => setBalance("0"));
    message.success("Transaction sent successfully");
    onClose();
  }
};

export default sendTransactionHandler;
