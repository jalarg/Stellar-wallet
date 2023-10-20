import React, { useState } from "react";
import Button from "../../commons/Button";
import Input from "../../commons/Input";
import { IRegistrationModalStepTwo } from "../../../types/types";
import Link from "next/link";
import { Checkbox } from "antd";
import closeModalHandler from "@/actions/closeModalHandler";
import { Modal } from "antd";
import { handleCheck } from "../../../actions/utils";
import loginHandler from "../../../actions/loginHandler";
import { ILogin } from "../../../types/types";

const StepTwoRegistration: React.FC<IRegistrationModalStepTwo> = ({
  content,
  label,
  isOpen,
  onClose,
  secretKey,
  publicKey,
  dispatch,
  auth,
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
        <div className="flex flex-col justify-center px-5">
          <Input
            label="Secret key"
            value={secretKey}
            readOnly={true}
            required={true}
          />
          <Input
            label="Public key"
            value={publicKey}
            readOnly={true}
            required={true}
          />
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
          <Link className={`modal-link-${label}`} href="/wallet">
            <Button
              disabled={!isChecked}
              buttonClass={`button-modal-${label}`}
              onClick={() => {
                loginHandler({
                  publicKey,
                  secretKey,
                  dispatch,
                  auth,
                } as ILogin);
              }}
            >
              {content.button}
            </Button>
          </Link>
          <Button
            buttonClass={`button-modal-${label}-cancel`}
            danger
            onClick={() => {
              closeModalHandler({ onClose, handleCheck, setIsChecked, isChecked });
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StepTwoRegistration;
