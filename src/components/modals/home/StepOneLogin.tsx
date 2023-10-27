import React, { useState } from "react";
import Button from "../../commons/Button";
import { ILoginModalStepOne } from "../../../types/types";
import { Checkbox } from "antd";
import {handleCloseModal, handleOpenModal} from "../../../actions/handlers";
import { Modal } from "antd";
import { handleCheck } from "../../../actions/utils";

const StepOneLogin: React.FC<ILoginModalStepOne> = ({
  content,
  label,
  isOpen,
  onClose,
  openModal,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <div>
        <div className="flex justify-center pb-5">
          <h1 className={`modal-title-${label} text-xl`}>{content.title}</h1>
        </div>
        <div className="flex flex-col justify-center bg-gray-200 rounded-[2px] border border-gray-600 p-3">
          <div className="flex flex-col justify-center pb-1">
            <h3 className={`modal-subtitle-${label} text-base`}>
              {content.subtitle}
            </h3>
          </div>
          {content.list.map((item, index) => (
            <p
              className={`modal-paragraphs-${label}-${index + 1}`}
              key={index}
            >{`- ${item}`}</p>
          ))}
        </div>
        <div className="flex flex-col justify-center pt-5">
          <Checkbox
            className={`modal-checkbox-${label} text-md text-red-800 hover:font-bold`}
            checked={isChecked}
            onChange={() => handleCheck(isChecked, setIsChecked)}
          >
            {content.checkbox}
          </Checkbox>
        </div>
        <div className="flex flex-row justify-center mt-5 space-x-10">
          <Button
            disabled={!isChecked}
            buttonClass={`button-modal-${label}`}
            onClick={() => {
              handleOpenModal({ modalName: "connectAddSecretKey", openModal });
            }}
          >
            {content.button}
          </Button>
          <Button
            buttonClass="button-modal-cancel-1"
            danger
            onClick={() => {
              handleCloseModal({
                onClose,
                handleCheck,
                isChecked,
                setIsChecked,
              });
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StepOneLogin;
