import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { trimWalletAddress, roundNumber } from "../actions/utils";

interface DataType {
  key: React.Key;
  sender: string;
  receiver: string;
  asset: string;
  amount: string;
}

interface IPayments {
  payments: DataType[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "From",
    dataIndex: "sender",
    render: (sender: string) => trimWalletAddress(sender),
  },
  {
    title: "Sent to",
    dataIndex: "receiver",
    render: (receiver: string) => trimWalletAddress(receiver),
  },
  {
    title: "Asset",
    dataIndex: "asset",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (amount: string) => roundNumber(amount),
  },
];

const Payments: React.FC<IPayments> = ({ payments }) => {
  const data = payments.map((payment, index) => {
    return {
      key: index,
      sender: payment.sender,
      receiver: payment.receiver,
      asset: payment.asset,
      amount: payment.amount,
    };
  });

  return (
    <div className="flex justify-center m-5">
      {payments.length > 0 ? ( // Mostrar la tabla si hay datos en payments
        <div className="w-full lg:w-3/4 xl:w-1/2">
          <Table columns={columns} dataSource={data} size="middle" />
        </div>
      ) : (
        <p className="wallet-lp-text flex justify-start items-start text-sm text-gray-600 pb-5">
          There are no payments to show.
        </p>
      )}
    </div>
  );
};

export default Payments;
