import React, { useState } from "react";
import Button from "../../commons/Button";
import { ISendTransactionModal } from "../../../types/types";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import closeModalHandler from "../../../actions/handlers/closeModalHandler";
import { Modal } from "antd";
import sendTransactionHandler from "@/actions/handlers/sendTransactionHandler";
import { ISendTransactionHandler } from "../../../types/types";

const SendModal: React.FC<ISendTransactionModal> = ({
  label,
  isOpen,
  onClose,
  content,
  secretKey,
  publicKey,
  setBalance,
  setPayments,
  isAlbedo
}) => {
  const [destinationId, setDestinationId] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSetTransactionId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDestinationId(e.target.value);
  };

  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

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

        <Input
          onChange={handleSetTransactionId}
          className="input-send-transaction-public-key text-xs sm:text-sm font-semibold"
          placeholder="Enter a Public Key"
          prefix={<UserOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
            </Tooltip>
          }
          value={destinationId}
        />
        <Input
          onChange={handleSetAmount}
          className="input-send-transaction-amount text-xs sm:text-sm font-semibold"
          placeholder="Enter an amount"
          suffix="XML"
          value={amount}
        />
        <div className="flex justify-evenly w-full gap-5 py-5 px-10">
          <div className="flex items-center justify-center gap-2 sm:w-[30%] w-[40%]">
            <Button
              isLoading={isLoading}
              disabled={isLoading || destinationId === "" || amount === ""}
              buttonClass={`button-modal-${label}`}
              onClick={() =>
                sendTransactionHandler({
                  publicKey: publicKey,
                  privateKey: secretKey,
                  amount: amount,
                  destinationId: destinationId,
                  onClose,
                  setBalance,
                  setIsLoading,
                  setPayments, 
                  isAlbedo,                 
                } as ISendTransactionHandler)
              }
            >
              {content.button}
            </Button>
            <Button
              buttonClass="button-modal-cancel"
              danger
              onClick={() => {
                closeModalHandler({ onClose });
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SendModal;
