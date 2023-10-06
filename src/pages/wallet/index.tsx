import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Input } from "antd";
import Button from "../../components/commons/Button";
import { WarningOutlined } from "@ant-design/icons";

function Wallet() {
  return (
    <>
      <div className="wallet-container flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-col justify-start items-center gap-5 flex-grow py-3">
          <div className="flex justify-evenly w-full gap-5 py-5 px-10">
            <div className="flex flex-col items-center justify-center ">
              <p className="wallet-balance-title text-sm sm:text-2xl">
                Your balance
              </p>
              <p className="wallet-balance-amount text-sm sm:text-2xl font-bold">
                0 Lumens (XML)
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 sm:w-[30%] w-[40%]">
              <Button fullWidth>Send</Button>
              <Button fullWidth secondary>
                Receive
              </Button>
            </div>
          </div>
          <div className="bg-neutralMain flex flex-col px-[12.5%] text-black bg-blue-200 rounded-md border-2 border-blue-300 sm:h-[70vh] h-[70vh] sm:w-[60%]  hover:bg-blue-100">
            <div className="flex items-center justify-center font-semibold gap-x-3">
              <div className="w-[80%]">
                <div className="wallet-publicKey-title flex items-start justify-start text-xs sm:text-xl font-semibold py-5">
                  Your Stellar Public Key
                </div>
                <Input
                  className="wallet-input text-sm font-semibold h-10"
                  placeholder="GBXECMFOPNJQXSYHYT5VYI43RHKGPTSD3QVOTY7BY4GC7TDDXKGJUAXB"
                />
              </div>
            </div>
            <div className="flex items-center justify-center border-2 border-orange-300 rounded-md bg-orange-100 mt-3 p-3">
              <WarningOutlined className="wallet-warning-icon text-sm sm:text-2xl" />
              <p className="wallet-warning-text text-sm sm:text-xl font-semibold text-center">
                This account is currently inactive. To activate it, send at
                least 1 lumen (XLM) to the Stellar public key displayed above.
              </p>
            </div>
            <div className="wallet-payments-title flex items-start justify-start pb-5 pt-5 font-semibold text-sm sm:text-xl">
              Payments History
            </div>
            <p className="wallet-payments-text flex justify-start items-start text-center text-sm text-gray-600">
              There are no payments to show.
            </p>
            <div className="wallet-lp-title flex items-start justify-start pb-5 pt-5 font-semibold text-sm sm:text-xl">
              Liquidity pool transactions
            </div>
            <p className="wallet-lp-text flex justify-start items-start text-sm text-gray-600 pb-5">
              There are no recent liquidity pool transactions to show.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Wallet;
