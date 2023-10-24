"use client";
import { useState } from "react";
import { Input } from "antd";
import { Button, Spiral } from "../../components/commons";
import { WarningOutlined } from "@ant-design/icons";
import Modal from "../../components/modals/wallet";
import { miniumBalanceHandler } from "../../actions/handlers";
import { trimWalletAddress, roundNumber } from "../../actions/utils";
import Image from "next/image";
import copy from "../../assets/copy-icon.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { message } from "antd";
import Payments from "../../components/Payments";
import withAuth from "../../components/withAuth";

function Wallet({ publicKey, secretKey, balance, setBalance, payments, setPayments }: any) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="wallet-container flex flex-col min-h-screen">
      <Modal
        openModal={openModal}
        activeModal={activeModal as string}
        label={activeModal as string}
        isOpen={activeModal !== null}
        onClose={closeModal}
        secretKey={secretKey as string}
        publicKey={publicKey as string}
        setBalance={setBalance}
        setPayments={setPayments}      
      />
      <div className="flex flex-col justify-start items-center gap-5 flex-grow py-3">
        <div className="flex justify-evenly w-full gap-5 py-5 px-10">
          <div className="flex flex-col items-center justify-center ">
            <p className="wallet-balance-title text-sm sm:text-2xl">
              Your balance
            </p>
            <p className="wallet-balance-amount text-sm sm:text-2xl font-bold">
              {roundNumber(balance)} Lumens (XML)
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 sm:w-[30%] w-[40%]">
            <Button
              onClick={() => {
                openModal("SendTransaction");
              }}
              buttonClass="button-send"
              fullWidth
            >
              Send
            </Button>
            <Button
              onClick={() => {
                openModal("ReceiveTransaction");
              }}
              buttonClass="button-receive"
              fullWidth
              secondary
            >
              Receive
            </Button>
          </div>
        </div>
        <div className="flex flex-col px-[12.5%] text-black bg-blue-200 rounded-md border-2 border-blue-300 sm:h-[80vh] h-[70vh] sm:w-[60%]   hover:bg-blue-100">
          <div className="flex items-center justify-center font-semibold gap-x-3">
            <div className="w-[80%]">
              <div className="wallet-public-key-title flex items-start justify-start text-xs sm:text-xl font-semibold py-5">
                Your Stellar Public Key
              </div>
              <div className="wallet-public-key-text flex items-start justify-start text-xs sm:text-xl font-semibold pb-5">
                <Input
                  className="wallet-input text-sm font-semibold h-10"
                  value={trimWalletAddress(publicKey)}
                />
                <CopyToClipboard
                  text={publicKey}
                  onCopy={() => message.success("Copied to clipboard")}
                >
                  <Image
                    src={copy}
                    alt="copy"
                    className="wallet-copy-icon m-3 w-4 h-4 cursor-pointer"
                  />
                </CopyToClipboard>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center border-2 border-orange-300 rounded-md bg-orange-100 mt-3 p-3 gap-2">
            <WarningOutlined className="wallet-warning-icon text-red-600 text-sm sm:text-2xl" />
            <p className="wallet-warning-text text-sm sm:text-xl font-semibold text-center">
              This account is currently inactive. to send 10,000 test lumen
              (XLM) to the Stellar public key displayed above.
            </p>
            {!isLoading ? (
              <>
                <button
                  disabled={isLoading}
                  className="button-add-lumens activate-button font-extrabold text-blue-500 hover:text-blue-600"
                  onClick={() =>
                    miniumBalanceHandler({
                      publicKey,
                      setBalance,
                      setIsLoading,
                    })
                  }
                >
                  Click here
                </button>
              </>
            ) : (
              <Spiral size="large" />
            )}
          </div>
          <div className="wallet-payments-title flex items-start justify-start pb-5 pt-5 font-semibold text-sm sm:text-xl">
            Payments History
          </div>
          <div className="wallet-payments-text flex justify-start items-start text-sm pb-5">
            {payments && <Payments payments={payments} />}
          </div>
          <div className="wallet-lp-title flex items-start justify-start pb-5 pt-5 font-semibold text-sm sm:text-xl">
            Liquidity pool transactions
          </div>
          <p className="wallet-lp-text flex justify-start items-start text-sm text-gray-600 pb-5">
            There are no recent liquidity pool transactions to show.
          </p>
        </div>
      </div>
    </div>
  );
}

export default withAuth(Wallet);
