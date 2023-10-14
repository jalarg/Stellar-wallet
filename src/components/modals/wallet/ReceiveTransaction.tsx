import { Modal } from "antd";
import { IModalSendTransaction } from "../../../types/types";

const ReceiveTransaction: React.FC<IModalSendTransaction> = ({
  content,
  label,
  onClose,
  isOpen,
}) => {
  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex flex-col justify-center bg-gray-200 rounded-[10px] border border-[2] border-gray-600 p-3 space-y-3 m-5">
        <div className="flex items-start justify-center text-xs sm:text-xl font-semibold py-5">
          <h1 className={`modal-title-${label} text-xl`}>{content.title}</h1>
        </div>

        <div className="flex justify-evenly w-full gap-5 py-5 px-10">
          <div className="flex items-center justify-center gap-2 sm:w-[30%] w-[40%] bg-red-500"></div>
        </div>
      </div>
    </Modal>
  );
};

export default ReceiveTransaction;
