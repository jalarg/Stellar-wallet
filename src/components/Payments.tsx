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
    width: 200,
  },
  {
    title: "Sent to",
    dataIndex: "receiver",
    render: (receiver: string) => trimWalletAddress(receiver),
    width: 200,
  },
  {
    title: "Asset",
    dataIndex: "asset",
    width: 100,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    render: (amount: string) => roundNumber(amount),
    width: 100,
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
    <div>
      {payments.length > 0 ? (
        <div className="w-full p-5">
          <Table
            columns={columns}
            dataSource={data}
            size="middle"
            pagination={{ pageSize: 5 }}
          />
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
