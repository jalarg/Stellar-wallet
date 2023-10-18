import { Modal } from "antd";
import React from "react";
import StepOneRegistration from "./home/StepOneRegistration";
import StepTwoRegistration from "./home/StepTwoRegistration";
import StepOneLogin from "./home/StepOneLogin";
import StepTwoLogin from "./home/StepTwoLogin";

const modalComponents: Record<string, React.FC<any>> = {
  generateKeyPair: StepOneRegistration,
  confirmWallet: StepTwoRegistration,
  connectSecretKeyWarning: StepOneLogin,
  connectAddSecretKey: StepTwoLogin,
};

type ModalProps<T> = {
  label: string;
  isOpen: boolean;
  onClose: () => void;
  modalProps: T;
};

const CustomModal = <T extends Record<string, any>>({
  isOpen,
  onClose,
  label,
  modalProps,
}: ModalProps<T>) => {
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
        <Component label={label} onClose={onClose} {...modalProps} />
      )}
    </Modal>
  );
};

export default CustomModal;
