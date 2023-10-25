import { IMinimumBalanceResponse } from "../../types/types";

const FRIENDBOT_URL = process.env.FRIENDBOT_URL as string;

async function addMinimumBalance(publicKey: string | null) {
  try {
    if (!publicKey) {
      throw new Error("Public key is null or empty");
    }
    const response = await fetch(
      `${FRIENDBOT_URL}?addr=${encodeURIComponent(publicKey)}`
    );

    const responseJSON = (await response.json()) as IMinimumBalanceResponse;

    if (responseJSON.status === 400) {
      console.error(`ERROR ${responseJSON.detail} !`, responseJSON.error);
    } else {
      console.log("SUCCESS! You have a new account :)\n", responseJSON);
    }
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default addMinimumBalance;
