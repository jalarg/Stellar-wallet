import React from "react";
import StepOneLogin from "./StepOneLogin";
import StepTwoLogin from "./StepTwoLogin";
import StepOneRegistration from "./StepOneRegistration";
import StepTwoRegistration from "./StepTwoRegistration";
import {
  generateKeyPairContentStep1,
  generateKeyPairContentStep2,
  loginContentStep1,
  loginContentStep2,
} from "../../../content/modals";
import { IModal } from "../../../types/types";

const Modal: React.FC<IModal> = ({
  activeModal,
  isOpen,
  onClose,
  label,
  openModal,
  setPublicKey,
  setSecretKey,
  secretKey,
  publicKey,
  dispatch,
  auth,

}) => {
  switch (activeModal) {
    case "generateKeyPair":
      return (
        <StepOneRegistration
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          openModal={openModal}
          content={generateKeyPairContentStep1}
          setPublicKey={setPublicKey}
          setSecretKey={setSecretKey}
        />
      );
    case "confirmWallet":
      return (
        <StepTwoRegistration
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          openModal={openModal}
          content={generateKeyPairContentStep2}
          secretKey={secretKey}
          publicKey={publicKey}
          dispatch={dispatch}
          auth={auth}
        />
      );
    case "connectSecretKeyWarning":
      return (
        <StepOneLogin
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          openModal={openModal}
          content={loginContentStep1}
        />
      );
    case "connectAddSecretKey":
      return (
        <StepTwoLogin
          label={label}
          isOpen={isOpen}
          onClose={onClose}
          openModal={openModal}
          content={loginContentStep2}
          setSecretKey={setSecretKey}
          dispatch={dispatch}
          auth={auth}
        />
      );
    default:
      return null;
  }
};

export default Modal;
