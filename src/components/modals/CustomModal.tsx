import { Modal } from "antd";
import { IModal } from "../../types/types";
import StepOneRegistration from "./StepOneRegistration";
import StepTwoRegistration from "./StepTwoRegistration";
import StepOneLogin from "./StepOneLogin";
import StepTwoLogin from "./StepTwoLogin";

const modalComponents: Record<string, React.FC<IModal>> = {
  generateKeyPair: StepOneRegistration,
  confirmWallet: StepTwoRegistration,
  connectSecretKeyWarning: StepOneLogin,
  connectAddSecretKey: StepTwoLogin,
};

const CustomModal: React.FC<IModal> = ({
  isOpen,
  onClose,
  content,
  openModal,
  label,
  setPublicKey,
  setSecretKey,
  publicKey,
  secretKey,
}) => {
  const Component = modalComponents[label];

  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      {Component && (
        <Component
          onClose={onClose}
          openModal={openModal}
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
