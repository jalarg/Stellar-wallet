"use client";
import Image from "next/image";
import logo from "../assets/stellar-xlm-logo.svg";
import Button from "../components/commons/Button";
import { useState } from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import { resetKeys } from "../actions/stellar";
import Footer from "../components/Footer";
import Modal from "../components/modals/home";
import { useSelector, useDispatch } from "react-redux";
import { IAuth } from "../types/types";

export default function Page() {
  const [secretKey, setSecretKey] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const dispatch = useDispatch();
  const auth = useSelector((state: IAuth) => state.auth);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
    if (secretKey && publicKey) {
      resetKeys({ setPublicKey, setSecretKey });
    }
  };

  return (
    <div className="relative h-[80vh]">
      <Modal
        activeModal={activeModal as string}
        label={activeModal as string}
        isOpen={activeModal !== null}
        onClose={closeModal}
        openModal={openModal}
        setPublicKey={setPublicKey}
        setSecretKey={setSecretKey}
        secretKey={secretKey as string}
        publicKey={publicKey as string}
        dispatch={dispatch}
        auth={auth}
      />
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-30">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="stellar-home-logo mx-auto w-auto h-20 rounded-lg cursor-pointer hover:scale-110 pt-5"
        />
      </div>
      <div className="border-2 rounded-[25px] my-6 mx-auto w-[90%] sm:max-w-lg h-900px] z-30 bg-gray-100 p-3 flex flex-col">
        <h1 className="rocket-title mb-8 text-center text-3xl font-bold tracking-tight text-gray-800">
          Rocket
        </h1>
        <p className="rocket-description-1 mb-8 text-center text-xl font-bold tracking-tight text-gray-800">
          The easiest way to connect with a wallet
        </p>
        <p className="rocket-description-2 mb-8 text-center text-xl font-bold tracking-tight text-gray-800">
          Sign in methods
        </p>
        <div className="flex flex-col justify-center m-5 px-5 ">
          <div className="flex flex-col justify-center m-5 px-5">
            <div className="flex flex-col justify-center m-5">
              <Button
                onClick={() => {
                  openModal("connectSecretKeyWarning");
                }}
                buttonClass="button-connect"
                fullWidth
              >
                Connect with a secret key
              </Button>
            </div>
            <Register modalName="generateKeyPair" openModal={openModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
