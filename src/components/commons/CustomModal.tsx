import React from "react";
import { Modal } from "antd";
import Button from "./Button";
import { Imodal } from "../../types/types";

const customModal: React.FC<Imodal> = ({ isOpen, onClose, data }) => {
  return (
    <Modal open={isOpen} onCancel={onClose} footer={null}>
      <div className="flex justify-center pb-5">
        <h1 className="text-xl">{data.title}</h1>
      </div>
      <div className="flex flex-col justify-center bg-gray-200 rounded-[2px] border border-gray-600 p-3">
        <div className="flex flex-col justify-center pb-1">
          <h3 className="text-base">{data.subtitle}</h3>
        </div>

        {data.list.map((item, index) => (
          <p className="text-sm" key={index}>{`- ${item}`}</p>
        ))}
      </div>
      <div className="flex flex-row justify-center mt-5 space-x-10">
        <Button onClick={onClose}>Continue</Button>
        <Button danger onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default customModal;
