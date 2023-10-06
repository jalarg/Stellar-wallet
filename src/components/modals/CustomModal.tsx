import { Modal } from "antd";
import { Imodal } from "../../types/types";
import StepOneRegistration from "./StepOneRegistration";
import StepTwoRegistration from "./StepTwoRegistration";

const CustomModal: React.FC<Imodal> = ({
  isOpen,
  onClose,
  data,
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
          data={data}
          label={label}
          setSecretKey={setSecretKey}
          setPublicKey={setPublicKey}
        />
      )}
      {label === "confirmWallet" && (
        <StepTwoRegistration
          onClose={onClose}
          setIsActiveModal={setIsActiveModal}
          data={data}
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
