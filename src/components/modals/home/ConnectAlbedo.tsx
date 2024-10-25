import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Button from "../../commons/Button";
import { handleCloseModal } from "../../../actions/handlers";
import { Modal } from "antd";
import { IAlbedoModal } from "../../../types/types";
import { InfoCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import icon from "../../../assets/albedo.svg";
import { handleLoginAlbedo } from "../../../actions/handlers";

const ConnectAlbedo: React.FC<IAlbedoModal> = ({
  content,
  label,
  isOpen,
  onClose,
  openModal,
  dispatch,
  auth,
}) => {
  const { isAuthenticated } = auth;
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/wallet");
    }
  }, [isAuthenticated, router]);

  return (
    <Modal
      className={`modal-container-${label}`}
      centered
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <div>
        <div className="flex flex-col sm:flex-row justify-center pb-5 gap-x-5">
          <Image
            width={30}
            height={30}
            src={icon}
            className="icon-albedo mx-1"
            alt="albedo"
          />
          <h1 className={`modal-title-${label} text-xl`}>{content.title}</h1>
        </div>
        <div className="flex justify-center pb-5 text-xsm ">
          <h3 className={`modal-subtitle-${label} text-base`}>
            {content.subtitle}
          </h3>
        </div>
        <div className="flex justify-center bg-blue-200 rounded-[2px] border border-blue-400 p-3 gap-x-2">
          <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
          {content.list.map((item, index) => (
            <p
              className={`modal-paragraphs-${label}-${index + 1}`}
              key={index}
            >{` ${item}`}</p>
          ))}
        </div>
        <div className="flex flex-row justify-center mt-5 space-x-10">
          <Button
            buttonClass={`button-modal-${label} `}
            onClick={() => handleLoginAlbedo({ dispatch })}
          >
            {content.button}
          </Button>
          <Button
            buttonClass="button-modal-cancel-1"
            danger
            onClick={() => {
              handleCloseModal({
                onClose,
              });
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConnectAlbedo;
