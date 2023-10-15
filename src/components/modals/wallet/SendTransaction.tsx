import React, { useState } from "react";
import Button from "../../commons/Button";
import { IWalletModalSendTransaction } from "../../../types/types";
import { Input, Tooltip } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import closeModalHandler from "../../../actions/closeModalHandler";

const SendTransaction: React.FC<IWalletModalSendTransaction> = ({
  content,
  label,
  onClose,
  secretKey,
}) => {
  const [value, setValue] = useState<string>("");
  const [amount, setAmount] = useState<string>("");

  const handleSetTransactionId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSetAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const sendTransactionHandler = () => {
    console.log("Transaction sent");
  };

  return (
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
        value={value}
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
            buttonClass={`button-modal-${label}`}
            onClick={sendTransactionHandler}
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
  );
};

export default SendTransaction;
