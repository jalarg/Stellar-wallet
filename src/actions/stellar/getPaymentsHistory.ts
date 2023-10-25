import { server } from ".";

interface IPayment {
  amount: string;
  asset: string;
  sender: string;
  receiver: string;
}

async function getPaymentsHistory(publicKey: string): Promise<IPayment[]> {
  return new Promise<IPayment[]>(async (resolve, reject) => {
    try {
      if (!publicKey) {
        throw new Error("Public key is null or empty");
      }
      const paymentData: IPayment[] = [];
      server
        .payments()
        .forAccount(publicKey)
        .stream({
          onmessage: function (payment: any) {
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
              receiver: payment.to,
            };

            if (payment.type !== "create_account") {
              paymentData.push(paymentEntry);
              resolve(paymentData);
            }
          },
          onerror: function (error: any) {
            console.error("Error in payment stream");
            reject(error);
          },
        });
    } catch (err) {
      console.error("ERROR!", err);
      reject(err);
    }
  });
}

export default getPaymentsHistory;
