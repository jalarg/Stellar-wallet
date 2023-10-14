import { server } from "./";

interface IPayment {
  amount: string;
  asset: string;
  sender: string;
}

async function paymentsHistory(publicKey: string): Promise<IPayment[]> {
  return new Promise<IPayment[]>(async (resolve, reject) => {
    try {
      const paymentData: IPayment[] = [];
      const payments = server.payments().forAccount(publicKey);
      payments.stream({
        onmessage: function (payment: any) {
          if (payment.to !== publicKey) {
            return;
          }
          var asset;
          if (payment.asset_type === "native") {
            asset = "lumens";
          } else {
            asset = payment.asset_code + ":" + payment.asset_issuer;
          }

          const paymentEntry: IPayment = {
            amount: payment.amount,
            asset: asset,
            sender: payment.from,
          };

          if (payment.type !== "create_account") {
            paymentData.push(paymentEntry);
          }
        },
        onerror: function (error: any) {
          console.error("Error in payment stream");
          reject(error);
        },
      });
      console.log("payments", paymentData);
    } catch (err) {
      console.error("ERROR!", err);
      reject(err);
    }
  });
}

export default paymentsHistory;
