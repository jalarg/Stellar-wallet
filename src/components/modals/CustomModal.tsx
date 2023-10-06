import React, { useState } from "react";
import { Modal, Checkbox } from "antd";
import Button from "../commons/Button";
import { Imodal } from "../../types/types";

import StepOneRegistration from "./StepOneRegistration";
import StepTowRegistration from "./StepTwoRegistration";

const CustomModal: React.FC<Imodal> = ({
  isOpen,
  onClose,
  data,
  setIsActiveModal,
  label,
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
        />
      )}
      {label === "confirmWallet" && (
        <StepTowRegistration
          onClose={onClose}
          setIsActiveModal={setIsActiveModal}
          data={data}
          label={label}
        />
      )}
    </Modal>
  );
};

export default CustomModal;
