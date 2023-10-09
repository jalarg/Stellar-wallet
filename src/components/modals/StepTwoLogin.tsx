import Button from "../commons/Button";
import Input from "../commons/Input";
import { IModal } from "../../types/types";
import Link from "next/link";

const StepTwoLogin: React.FC<IModal> = ({ content, label, onClose }) => {
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
