import React, { useState } from "react";
import Button from "../commons/Button";
import { IModal } from "../../types/types";
import { Checkbox } from "antd";
import closeModalHandler from "@/actions/closeModalHandler";

const StepOneLogin: React.FC<IModal> = ({
  content,
  label,
  onClose,
  openModal,
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
        <Button
          disabled={!isChecked}
          buttonClass={`button-modal-${label}`}
          onClick={() => {
            openModal("connectAddSecretKey");
          }}
        >
          {content.button}
        </Button>
        <Button
          buttonClass="button-modal-cancel-1"
          danger
          onClick={() => {
            closeModalHandler({ onClose, handleCancelChecked });
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default StepOneLogin;
