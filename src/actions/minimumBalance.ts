interface ResponseData {
  status: number;
  detail: string;
  error: string;
}

async function minimumBalance(publicKey: string | null) {
  try {
    if (!publicKey) {
      throw new Error("Public key is null or empty");
    }
    const response = await fetch(
      `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
    );

    const responseJSON = (await response.json()) as ResponseData;
    
    if (responseJSON.status === 400) {
      console.error(`ERROR ${responseJSON.detail} !`, responseJSON.error);
    } else {
      console.log("SUCCESS! You have a new account :)\n", responseJSON);
    }
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default minimumBalance;
