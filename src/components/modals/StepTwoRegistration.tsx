import React, { useState } from "react";
import Button from "../commons/Button";
import Input from "../commons/Input";
import { IModal } from "../../types/types";
import Link from "next/link";
import { Checkbox } from "antd";

const StepTwoRegistration: React.FC<IModal> = ({
  content,
  label,
  onClose,
  secretKey,
  publicKey,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCancelChecked = () => {
    setIsChecked(false);
  };

  return (
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
          onChange={(e) => setIsChecked(e.target.checked)}
        >
          {content.checkbox}
        </Checkbox>
      </div>
      <div className="flex flex-row justify-center mt-5 space-x-10">
        <Link className={`modal-link-${label}`} href="/wallet">
          <Button
            disabled={!isChecked}
            buttonClass={`button-modal-${label}`}
            onClick={() => {}}
          >
            {content.button}
          </Button>
        </Link>
        <Button
          buttonClass={`button-modal-${label}-cancel`}
          danger
          onClick={() => {
            onClose();
            handleCancelChecked()
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default StepTwoRegistration;
