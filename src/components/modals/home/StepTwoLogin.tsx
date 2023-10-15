import Button from "../../commons/Button";
import Input from "../../commons/Input";
import { ILoginModalStepTwo } from "../../../types/types";
import Link from "next/link";
import { useState } from "react";

const StepTwoLogin: React.FC<ILoginModalStepTwo> = ({
  content,
  label,
  onClose,
  setSecretKey,
}) => {
  const [value, setValue] = useState<string>("");

  const handleSecretKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
        <div className="flex justify-center pb-5">
          <h1 className={`modal-question-${label} text-base font-semibold`}>
            {content.question}
          </h1>
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
          placeholder="Starts with S, example: SCHK..ZLJK"
          label="Secret key"
          required={true}
          readOnly={false}
          onChange={handleSecretKeyChange}
          value={value}
        />
      </div>
      <div className="flex flex-row justify-center mt-5 space-x-10">
        <Link className={`modal-link-${label}`} href="/wallet">
          <Button buttonClass={`button-modal-${label}`} onClick={() => {}}>
            {content.button}
          </Button>
        </Link>
        <Button buttonClass="button-modal-cancel-2" danger onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default StepTwoLogin;
