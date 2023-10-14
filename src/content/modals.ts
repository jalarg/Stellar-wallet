export const generateKeyPairContentStep1 = {
  title: "Generate a new keypair",
  subtitle: "ATTENTION: Secret key wallets are not safe:",
  list: [
    "Pasting your secret key makes you vulnerable to accidents, attacks, and scams that can result in the loss of funds.",
    "It is safer to create an account using methods that do not share your secret key with websites, such as hardware wallets or browser extensions.",
  ],
  button: "Continue",
};

export const generateKeyPairContentStep2 = {
  title: "Generate a new keypair",
  subtitle: "ATTENTION:",
  list: [
    "It is very important to save your secret key and store it somewhere safe.",
    "If you lose it, you will lose access to your account. No one in the known universe will be able to help you get back in.",
    "SDF does not store a copy of your keys and cannot help you recover lost keys.",
    "Anyone who knows your secret key has access to your funds.",
    "You have several options: Write your key down on a piece of paper. Keep it in a safe. Store it in a password manager. Use a hardware wallet. But don't ever keep it unencrypted on your computer or in your email.",
    "Note: Connecting by entering a secret key may be deprecated in a future version of the Account Viewer.",
  ],
  checkbox: "I’ve stored my secret key in a safe place.",
  button: "Confirm",
};

export const loginContentStep1 = {
  title: "Connect with a secret key",
  subtitle:
    "ATTENTION: Entering your secret key on any website is not recommended",
  list: [
    "Copy and pasting your secret key makes you vulnerable to accidents, attacks, and scams that can result in loss of funds.",
    "If this website were compromised or if you visit a phishing replica of this site, your secret key may be stolen if you use this method.",
    "It is safer to use connection methods that do not share your secret key with websites, such as hardware wallets or browser extensions.",
    "Note: Connecting by entering a secret key may be deprecated in a future version of the Account Viewer.",
  ],
  checkbox: "I understand and accept the risks of entering my secret key.",
  button: "Continue",
};

export const loginContentStep2 = {
  title: "Connect with a secret key",
  subtitle:
    "Always make sure the domain you are using to access the Account Viewer is https://accountviewer.stellar.org before entering your keys. Scammers can replicate this website on a different domain to steal your keys.",
  question:
    "Did you know that password managers are a safer alternative to copying and pasting your secret keys?",
  list: [
    "Password managers will autocomplete the secret key field only if they detect you're in the right domain. They also reduce risk by removing the need to copy and paste your secret key.",
  ],
  button: "Connect",
};

export const sendTransaction = {
  title: "Send Lummens",
  subtitle: "",
  list: [""],
  button: "Send",
};

