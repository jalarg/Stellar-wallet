import React, { useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Image from "next/image";
import copy from "../../../assets/copy-icon.svg";
import { IReceiveTransactionModal } from "../../../types/types";
import trimWalletAddress from "../../../actions/utils/trimWalletAddress";
import { message } from "antd";
import { Modal } from "antd";

const ReceiveModal: React.FC<IReceiveTransactionModal> = ({
  label,
  isOpen,
  onClose,
  content,
  publicKey,
}) => {
  const [qrValue, setQrValue] = useState<string>("");
  useEffect(() => {
    if (publicKey) {
      setQrValue(publicKey);
    }
  }, [publicKey]);

  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <div className="flex flex-col justify-center bg-gray-200 rounded-[10px] border border-[2] border-gray-600 p-3 space-y-3 m-5">
        <div className="flex flex-col items-center justify-center text-center text-xs sm:text-xl py-5 space-y-2">
          <h1 className={`text-xl font-semibold modal-title-${label}`}>
            {content.title}
          </h1>
          <h3 className={`modal-subtitle-${label} text-sm sm:text-sm`}>
            {content.subtitle}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center text-xs sm:text-xl">
          <div className="flex flex-col items-center justify-center bg-white rounded-[10px] border border-[2] border-gray-600 p-3">
            <QRCode className="modal-receive-qr" value={qrValue} size={128} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className={`modal-publicKey-${label} text-xsm sm:text-xsm`}>
            {trimWalletAddress(publicKey)}
          </h3>
          <CopyToClipboard
            text={qrValue}
            onCopy={() => message.success("Copied to clipboard")}
          >
            <Image
              src={copy}
              alt="copy"
              className="modal-receive-copy-icon m-3 w-4 h-4 cursor-pointer"
            />
          </CopyToClipboard>
        </div>
        <div className="flex justify-evenly w-full gap-5 py-5 px-10">
          <div className="flex items-center justify-center gap-2 sm:w-[30%] w-[40%] bg-red-500"></div>
        </div>
      </div>
    </Modal>
  );
};

export default ReceiveModal;
