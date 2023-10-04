"use client";
import Image from "next/image";
import logo from "../assets/stellar-xlm-logo.svg";
import Input from "../components/commons/Input";
import Button from "../components/commons/Button";
import { useState } from "react";
import Register from "../components/Register";
import Navbar from "../components/Navbar";

export default function Page() {
  const [secret, setSecret] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  return (
    <div className="relative h-[100vh]">
      <Navbar />
      <div className="sm:mx-auto sm:w-full sm:max-w-md z-30">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo"
          className="mx-auto w-auto h-20 rounded-lg cursor-pointer hover:scale-110 pt-5"
        />
      </div>
      <div className="border-2 rounded-[25px] my-6 mx-auto w-[90%] sm:max-w-lg h-900px] z-30 bg-gray-100 p-3 flex flex-col">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-800">
          Rocket
        </h1>
        <p className="mb-8 text-center text-xl font-bold tracking-tight text-gray-800">
          The easiest way to connect with a wallet
        </p>
        <p className="mb-8 text-center text-xl font-bold tracking-tight text-gray-800">
          Sign in methods
        </p>

        <div className="flex flex-col justify-center m-5 px-5 ">
          {secret && (
            <div className="flex flex-col justify-center px-5 ">
              <Input
                label="Secret key"
                value={secret}
                readOnly={true}
                required={true}
              />
              <Input
                label="Public key"
                value={publicKey}
                readOnly={true}
                required={true}
              />
              <div className="flex flex-col justify-center m-5">
                <Button secondary fullWidth>
                  Confirm wallet
                </Button>
              </div>
              <div className="flex flex-col justify-center m-5">
                <Button
                  onClick={() => {
                    setPublicKey(null);
                    setSecret(null);
                  }}
                  fullWidth
                  danger
                >
                  Go back
                </Button>
              </div>
            </div>
          )}
          {!secret && (
            <div className="flex flex-col justify-center m-5 px-5">
              <div className="flex flex-col justify-center m-5">
                <Button fullWidth>Confirm wallet</Button>
              </div>
              <Register setSecret={setSecret} setPublicKey={setPublicKey} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
