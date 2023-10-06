import { projectUrl, stellarUrl } from "../support/constants";

beforeEach(() => {
  cy.visit(projectUrl);
});

describe("Home: UI and functionality:", () => {
  beforeEach(() => {
    cy.get(".button-register").as("registerButton");
    cy.get(".button-connect").as("connectButton");
    cy.get("@registerButton").click();
    cy.get(".input-private-key").as("privateKeyInput");
    cy.get(".input-public-key").as("publicKeyInput");
    cy.get(".button-confirm-wallet").as("confirmWalletButton");
    cy.get(".button-go-back").as("goBackButton");
    cy.get(".theme-button-light").as("themeButtonLight");
    cy.get("@goBackButton").click();
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

  it("Should show a button to generate a pair of new keys and should  have create public and private key functionality", () => {
    cy.get("@registerButton")
      .should("exist")
      .and("have.text", "Generate key pair for a new account");
    cy.get("@registerButton").click();
    cy.get("@publicKeyInput").should("exist");
    cy.get("@privateKeyInput").should("exist");
    cy.get("@confirmWalletButton").should("exist");
    cy.get("@goBackButton").should("exist");
    cy.get("@goBackButton").click();
    cy.get("@publicKeyInput").should("not.exist");
    cy.get("@privateKeyInput").should("not.exist");
    cy.get("@publicKeyInput").should("not.exist");
    cy.get("@privateKeyInput").should("not.exist");
  });
});
describe(" Navbar: UI and functionality:", () => {
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
describe(" Registration Modal Step1: UI and functionality:", () => {
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
describe(" Registration Modal Step2: UI and functionality:", () => {
  beforeEach(() => {
    cy.get(".button-register").as("registerButton");
    cy.get("@registerButton").click();
    cy.get(".button-modal-generateKeyPair").as("generateKeyPairButton");
    cy.get("@generateKeyPairButton").click();

    cy.get(".button-modal-confirmWallet").as("confirmWalletButton");
    cy.get(".button-modal-confirmWallet-cancel").as("cancelButton");
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
