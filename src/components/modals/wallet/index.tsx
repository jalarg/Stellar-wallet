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
        />
      );
    default:
      return null;
  }
};

export default Modal;
