import albedo from "@albedo-link/intent";

async function albedoLogin() {
  try {
    const albedoPublicKey = await albedo.publicKey({});
    console.log("Logged in with Albedo. Public Key:", albedoPublicKey);

    return albedoPublicKey;
  } catch (err: any) {
    throw new Error(err.error.message);
  }
}

export default albedoLogin;
