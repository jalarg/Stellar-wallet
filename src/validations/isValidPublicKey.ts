function isValidPublicKey(publicKey: string) {
  return /^[0-9A-Z]{56}$/.test(publicKey);
}

export default isValidPublicKey;
