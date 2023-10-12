import { projectUrl, stellarUrl } from "../support/constants";

beforeEach(() => {
  cy.visit(projectUrl);
});

describe("Home: UI and functionality:", () => {
  beforeEach(() => {
    cy.get(".button-register").as("registerButton");
    cy.get(".button-connect").as("connectButton");
  });

  it("Should the Stellar logo be visible", () => {
    cy.get(".stellar-home-logo").should("be.visible");
  });

  it("Should the title and two paragraphs be visible and contain the text description", () => {
    cy.get(".rocket-title").should("be.visible").and("contain", "Rocket");
    cy.get(".rocket-description-1")
      .should("be.visible")
      .and("contain", "The easiest way to connect with a wallet");
    cy.get(".rocket-description-2")
      .should("be.visible")
      .and("contain", "Sign in methods");
  });

  it("Should show a button to generate connect", () => {
    cy.get("@connectButton")
      .should("exist")
      .should("be.visible")
      .and("contain", "Connect with a secret key");
  });
});
describe("Navbar: UI and functionality:", () => {
  beforeEach(() => {
    cy.get(".theme-button-light").as("themeButtonLight");
  });
  it("Should the navbar container be visible", () => {
    cy.get(".navbar-container").should("exist").and("be.visible");
  });

  it("Should the Stellar logo be visible and have a href", () => {
    cy.get(".navbar-container").should("exist").and("be.visible");
    cy.get(".stellar-icon")
      .should("be.visible")
      .and("have.attr", "href", stellarUrl);
  });

  it("Should the theme icon exist and have the toggle theme functionality", () => {
    cy.get("@themeButtonLight").should("exist");
    cy.get(".theme-button-dark").should("not.exist");
    cy.get("@themeButtonLight").click().should("not.exist");
    cy.get(".theme-button-dark").should("exist");
    cy.get("@themeButtonLight").should("not.exist");
  });
});
describe("Registration Modal Step1", () => {
  beforeEach(() => {
    cy.get(".button-register").as("registerButton");
    cy.get("@registerButton").click();

    cy.get(".button-modal-generateKeyPair").as("generateKeyPairButton");
    cy.get(".button-modal-cancel").as("cancelButton");
  });

  it("Should the modal container be visible", () => {
    cy.get(".modal-container-generateKeyPair")
      .should("exist")
      .and("be.visible");
  });

  it("Should the title and paragraphs be visible and contain the text description", () => {
    cy.get(".modal-title-generateKeyPair")
      .should("be.visible")
      .and("contain", "Generate a new keypair");
    cy.get(".modal-subtitle-generateKeyPair")
      .should("be.visible")
      .and("contain", "ATTENTION: Secret key wallets are not safe:");
    cy.get(".modal-paragraphs-generateKeyPair-1")
      .should("be.visible")
      .and(
        "contain",
        "Pasting your secret key makes you vulnerable to accidents, attacks, and scams that can result in the loss of funds."
      );
    cy.get(".modal-paragraphs-generateKeyPair-2")
      .should("be.visible")
      .and(
        "contain",
        "It is safer to create an account using methods that do not share your secret key with websites, such as hardware wallets or browser extensions."
      );
  });

  it("Should show a button cancel and perform an action", () => {
    cy.get("@cancelButton").should("exist").and("have.text", "Cancel").click();
    cy.get(".modal-container-generateKeyPair").should("be.hidden");
  });

  it("Should show a button to continue and perform an action", () => {
    cy.get("@generateKeyPairButton")
      .should("exist")
      .and("have.text", "Continue")
      .click();
    cy.get(".modal-container-confirmWallet").should("exist");
  });
});
describe("Registration Modal Step2", () => {
  beforeEach(() => {
    cy.get(".button-register").as("registerButton");
    cy.get("@registerButton").click();
    cy.get(".button-modal-generateKeyPair").as("generateKeyPairButton");
    cy.get("@generateKeyPairButton").click();

    cy.get(".button-modal-confirmWallet").as("confirmWalletButton");
    cy.get(".button-modal-confirmWallet-cancel").as("cancelButton");
    cy.get(".input-public-key").as("publicKeyInput");
    cy.get(".input-private-key").as("privateKeyInput");
    cy.get(".modal-checkbox-confirmWallet").as("checkboxConfirmWallet");
  });

  it("Should the modal container be visible", () => {
    cy.get(".modal-container-confirmWallet").should("exist").and("be.visible");
  });

  it("Should the title and paragraphs be visible and contain the text description", () => {
    cy.get(".modal-title-confirmWallet")
      .should("be.visible")
      .and("contain", "Generate a new keypair");
    cy.get(".modal-subtitle-confirmWallet")
      .should("be.visible")
      .and("contain", "ATTENTION:");
    cy.get(".modal-paragraphs-confirmWallet-1")
      .should("be.visible")
      .and(
        "contain",
        "It is very important to save your secret key and store it somewhere safe."
      );
    cy.get(".modal-paragraphs-confirmWallet-2")
      .should("be.visible")
      .and(
        "contain",
        "If you lose it, you will lose access to your account. No one in the known universe will be able to help you get back in."
      );
    cy.get(".modal-paragraphs-confirmWallet-3")
      .should("be.visible")
      .and(
        "contain",
        "SDF does not store a copy of your keys and cannot help you recover lost keys."
      );
    cy.get(".modal-paragraphs-confirmWallet-4")
      .should("be.visible")
      .and(
        "contain",
        "Anyone who knows your secret key has access to your funds."
      );
    cy.get(".modal-paragraphs-confirmWallet-5")
      .should("be.visible")
      .and(
        "contain",
        "You have several options: Write your key down on a piece of paper. Keep it in a safe. Store it in a password manager. Use a hardware wallet. But don't ever keep it unencrypted on your computer or in your email."
      );

    cy.get(".modal-paragraphs-confirmWallet-6")
      .should("be.visible")
      .and(
        "contain",
        "Note: Connecting by entering a secret key may be deprecated in a future version of the Account Viewer."
      );
  });

  it("Should show input for public and private key", () => {
    cy.get("@publicKeyInput").should("exist");
    cy.get("@privateKeyInput").should("exist");
  });

  it("Should show a checkbox", () => {
    cy.get(".modal-checkbox-confirmWallet").should("exist");
  });

  it("Should show a button cancel and perform an action", () => {
    cy.get("@cancelButton").should("exist").and("have.text", "Cancel").click();
    cy.get(".modal-container-generateKeyPair").should("be.hidden");
  });

  it("Should show a button to continue and perform an action", () => {
    cy.get("@checkboxConfirmWallet").click();
    cy.get(".modal-checkbox-confirmWallet").should("exist");
    cy.get("@confirmWalletButton")
      .should("exist")
      .and("have.text", "Confirm")
      .click();
    cy.get(".modal-container-confirmWallet").should("not.exist");
  });
});
describe("Login Modal Step1", () => {
  beforeEach(() => {
    cy.get(".button-connect").as("connectButton");
    cy.get("@connectButton").click();
    cy.get(".button-modal-connectSecretKeyWarning").as(
      "connectSecretKeyWarning"
    );
    cy.get(".button-modal-cancel-1").as("cancelButton");
    cy.get("@cancelButton").click();
  });

  it("Should the modal container be visible", () => {
    cy.get("@connectButton").click();
    cy.get(".modal-container-connectSecretKeyWarning")
      .should("exist")
      .and("be.visible");
  });

  it("Should the checkbox be visible and have text", () => {
    cy.get("@connectButton").click();
    cy.get(".modal-checkbox-connectSecretKeyWarning")
      .should("exist")
      .and("be.visible")
      .and(
        "have.text",
        "I understand and accept the risks of entering my secret key."
      );
  });

  it("Should the title and paragraphs be visible and contain the text description", () => {
    cy.get(".modal-title-connectSecretKeyWarning")
      .should("be.visible")
      .and("contain", "Connect with a secret key");
    cy.get(".modal-subtitle-connectSecretKeyWarning")
      .should("be.visible")
      .and(
        "contain",
        "ATTENTION: Entering your secret key on any website is not recommended"
      );
    cy.get(".modal-paragraphs-connectSecretKeyWarning-1")
      .should("be.visible")
      .and(
        "contain",
        "Copy and pasting your secret key makes you vulnerable to accidents, attacks, and scams that can result in loss of funds."
      );
    cy.get(".modal-paragraphs-connectSecretKeyWarning-2")
      .should("be.visible")
      .and(
        "contain",
        "If this website were compromised or if you visit a phishing replica of this site, your secret key may be stolen if you use this method."
      );
    cy.get(".modal-paragraphs-connectSecretKeyWarning-3")
      .should("be.visible")
      .and(
        "contain",
        "It is safer to use connection methods that do not share your secret key with websites, such as hardware wallets or browser extensions."
      );
    cy.get(".modal-paragraphs-connectSecretKeyWarning-4")
      .should("be.visible")
      .and(
        "contain",
        "Note: Connecting by entering a secret key may be deprecated in a future version of the Account Viewer."
      );
  });
  it("Should show a button cancel and perform an action", () => {
    cy.get("@connectButton").click();
    cy.get("@cancelButton").should("exist").and("have.text", "Cancel").click();
    cy.get(".modal-container-connectSecretKeyWarning").should("be.hidden");
  });
  it("Should show a button to continue and perform an action", () => {
    cy.get("@connectButton").click();
    cy.get(".modal-checkbox-connectSecretKeyWarning").click();
    cy.get("@connectSecretKeyWarning")
      .should("exist")
      .and("have.text", "Continue")
      .click();
    cy.get(".modal-container-connectAddSecretKey").should("exist");
  });
});
describe("Login Modal Step2", () => {
  beforeEach(() => {
    cy.get(".button-connect").as("connectButton");
    cy.get("@connectButton").click();
    cy.get(".modal-checkbox-connectSecretKeyWarning").click();
    cy.get(".button-modal-connectSecretKeyWarning").click();
    cy.get(".button-modal-cancel-2").as("cancelButton");
    cy.get(".button-modal-connectAddSecretKey").as("AddSecretKeyButton");
  });

  it("Should the modal container be visible", () => {
    cy.get(".modal-container-connectSecretKeyWarning")
      .should("exist")
      .and("be.visible");
  });

  it("Should the title and paragraphs be visible and contain the text description", () => {
    cy.get(".modal-title-connectAddSecretKey")
      .should("be.visible")
      .and("contain", "Connect with a secret key");
    cy.get(".modal-subtitle-connectAddSecretKey")
      .should("be.visible")
      .and(
        "contain",
        "Always make sure the domain you are using to access the Account Viewer is https://accountviewer.stellar.org before entering your keys. Scammers can replicate this website on a different domain to steal your keys."
      );
    cy.get(".modal-question-connectAddSecretKey")
      .should("be.visible")
      .and(
        "contain",
        "Did you know that password managers are a safer alternative to copying and pasting your secret keys?"
      );
    cy.get(".modal-paragraphs-connectAddSecretKey-1")
      .should("be.visible")
      .and(
        "contain",
        "Password managers will autocomplete the secret key field only if they detect you're in the right domain. They also reduce risk by removing the need to copy and paste your secret key."
      );
  });

  it("Should show a input and be visible", () => {
    cy.get(".input-private-key").should("exist").and("be.visible");
  });

  it("Should show a button cancel and perform an action", () => {
    cy.get("@cancelButton").should("exist").and("have.text", "Cancel").click();
    cy.get(".modal-container-connectAddSecretKey").should("be.hidden");
  });

  it("Should show a button to continue and perform an action", () => {
    cy.get("@AddSecretKeyButton")
      .should("exist")
      .and("have.text", "Connect")
      .click();
    cy.get(".modal-container-connectAddSecretKey").should("not.exist");
  });
});
