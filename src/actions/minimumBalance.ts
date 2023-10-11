async function minimumBalance(publicKey: string) {
  try {
    if (publicKey) {
      const response = await fetch(
        `https://friendbot.stellar.org?addr=${encodeURIComponent(publicKey)}`
      );
      const responseJSON = await response.json();

      if (responseJSON.status === 400) {
        console.error(`ERROR ${responseJSON.detail} !`, responseJSON.error);
      } else {
        console.log("SUCCESS! You have a new account :)\n", responseJSON);
      }
    }
  } catch (err) {
    console.error("ERROR!", err);
  }
}

export default minimumBalance;
