import Button from "../../commons/Button";
import { IRegistrationModalStepOne } from "../../../types/types";
import registerHandler from "../../../actions/handlers/registerHandler";
import { Modal } from "antd";

const StepOneRegistration: React.FC<IRegistrationModalStepOne> = ({
  label,
  isOpen,
  onClose,
  openModal,
  content,
  setPublicKey,
  setSecretKey,
}) => {
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
        <div className="flex flex-row justify-center mt-5 space-x-10">
          <Button
            buttonClass={`button-modal-${label}`}
            onClick={() => {
              registerHandler({ setSecretKey, setPublicKey, openModal });
            }}
          >
            {content.button}
          </Button>
          <Button buttonClass="button-modal-cancel" danger onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default StepOneRegistration;
