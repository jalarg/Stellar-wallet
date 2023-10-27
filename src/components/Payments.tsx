import React from "react";
import { Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import { trimWalletAddress, roundNumber } from "../actions/utils";
import { IPayments, IPaymentsTable } from "../types/types";

const columns: ColumnsType<IPaymentsTable> = [
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
  const paymentsHistory = payments.map((payment, index) => {
    const { sender, receiver, asset, amount } = payment;
    return {
      key: index,
      sender,
      receiver,
      asset,
      amount,
    };
  });

  return (
    <div>
      {payments.length > 0 ? (
        <div className="w-full p-5">
          <Table
            columns={columns}
            dataSource={paymentsHistory}
            size="middle"
            pagination={{ pageSize: 5 }}
          />
        </div>
      ) : (
        <p className="wallet-payments-text flex justify-start items-start text-sm text-gray-600 pb-5">
          There are no payments to show.
        </p>
      )}
    </div>
  );
};

export default Payments;
