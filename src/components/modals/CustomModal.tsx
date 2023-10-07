import { Modal } from "antd";
import { IModal } from "../../types/types";
import StepOneRegistration from "./StepOneRegistration";
import StepTwoRegistration from "./StepTwoRegistration";



const CustomModal: React.FC<IModal> = ({
  isOpen,
  onClose,
  content,
  setIsActiveModal,
  label,
  setPublicKey,
  setSecretKey,
  publicKey,
  secretKey,
}) => {
  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      {label === "generateKeyPair" && (
        <StepOneRegistration
          onClose={onClose}
          setIsActiveModal={setIsActiveModal}
          content={content}
          label={label}
          setSecretKey={setSecretKey}
          setPublicKey={setPublicKey}
        />
      )}
      {label === "confirmWallet" && (
        <StepTwoRegistration
          onClose={onClose}
          setIsActiveModal={setIsActiveModal}
          content={content}
          label={label}
          secretKey={secretKey}
          publicKey={publicKey}
          setSecretKey={setSecretKey}
          setPublicKey={setPublicKey}
        />
      )}
    </Modal>
  );
};

export default CustomModal;
