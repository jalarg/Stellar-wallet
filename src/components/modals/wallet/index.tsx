import ReceiveModal from "./ReceiveModal";
import SendModal from "./SendModal";
import { IModalWallet } from "../../../types/types";
import { sendTransaction, receiveTransaction } from "../../../content/modals";

const Modal: React.FC<IModalWallet> = ({
  activeModal,
  isOpen,
  onClose,
  label,
  secretKey,
  publicKey,
  setBalance,
  setPayments,
}) => {
  switch (activeModal) {
    case "ReceiveTransaction":
      return (
        <ReceiveModal
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          content={receiveTransaction}
          publicKey={publicKey}
        />
      );
    case "SendTransaction":
      return (
        <SendModal
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          content={sendTransaction}
          secretKey={secretKey}
          publicKey={publicKey}
          setBalance={setBalance}
          setPayments={setPayments}
        />
      );
    default:
      return null;
  }
};

export default Modal;
