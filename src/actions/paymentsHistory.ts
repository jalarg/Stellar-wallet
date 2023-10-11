import StellarSdk from "stellar-sdk";

const server = new StellarSdk.Server("https://horizon-testnet.stellar.org");

interface IPayment {
  amount: string;
  asset: string;
  sender: string;
}

async function paymentsHistory(publicKey: string) {
  const paymentData: IPayment[] = [];

  try {
    const payments = await server.payments().forAccount(publicKey);
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
      },
    });
    console.log("Regular Payments:", paymentData);
    return paymentData;
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default paymentsHistory;
