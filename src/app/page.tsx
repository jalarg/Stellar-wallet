"use client";
import Image from "next/image";
import logo from "./assets/stellar-xlm-logo.svg";
import Input from "./commons/Input";
import { useState } from "react";

export default function Home() {
  const [secret, setSecret] = useState<string | null>(null);
  const [publicKey, setPublicKey] = useState<string | null>(null);

  return (
    <div className="relative h-[100vh]">
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

        <div className="flex flex-col justify-center m-5">
          {!secret && (
            <div className="flex flex-col justify-center px-5">
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
                <button className="flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-500 hover:bg-green-600 focus-visible:outline-rose-600 text-white">
                  Confirm wallet
                </button>
              </div>
              <div className="flex flex-col justify-center m-5">
                <button
                  onClick={() => {
                    setSecret(null);
                    setPublicKey(null);
                  }}
                  className="flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-red-500 hover:bg-green-600 focus-visible:outline-rose-600 text-white"
                >
                  Go back
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center m-5">
          <button className="flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-green-500 hover:bg-green-600 focus-visible:outline-rose-600 text-white">
            Generate key pair for a new account
          </button>
        </div>
      </div>
    </div>
  );
}
