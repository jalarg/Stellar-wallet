import {
  projectUrl,
  stellarUrl,
  githubUrl,
  termsOfServiceUrl,
  privacyPolicyUrl,
} from "../support/constants";

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
describe(" Footer: UI and functionality:", () => {
  it("Should the footer container be visible", () => {
    cy.get(".footer-container").should("exist").and("be.visible");
  });

  it("Should the github logo be visible and have the correct url", () => {
    cy.get(".github-icon")
      .should("be.visible")
      .and("have.attr", "href", githubUrl);
  });

  it("Should the terms and services and have the correct url", () => {
    cy.get(".footer-terms-service-url")
      .should("be.visible")
      .and("have.attr", "href", termsOfServiceUrl);

    cy.get(".footer-terms-service-text")
      .should("be.visible")
      .contains("Terms and Services");
  });

  it("Should the privacy policy be visible, have specific text and have the correct url", () => {
    cy.get(".privacy-policy-url")
      .should("be.visible")
      .and("have.attr", "href", privacyPolicyUrl);

    cy.get(".privacy-policy-text")
      .should("be.visible")
      .contains("Privacy Policy");
  });

  it("Should have a copyright icon and have an specific text", () => {
    cy.get(".footer-copyright-icon").should("be.visible");

    cy.get(".footer-copyright-text")
      .should("be.visible")
      .contains("Rocket wallet 2023");
  });
});
describe(" Wallet: UI and functionality:", () => {
  beforeEach(() => {
    cy.visit(`${projectUrl}/wallet`);
  });

  it("Should the wallet container be visible", () => {
    cy.get(".wallet-container").should("exist").and("be.visible");
  });

  it("Should the title for the balance and the amount be visible and contain the amount number", () => {
    cy.get(".wallet-balance-title")
      .should("be.visible")
      .and("contain", "Your balance");
    cy.get(".wallet-balance-amount")
      .should("be.visible")
      .and("contain", `0 Lumens (XML)`);
  });

  it("Should the button send and receive be visible and contain a text message", () => {
    cy.get(".button-send").should("be.visible").and("contain", "Send");
    cy.get(".button-receive").should("be.visible").and("contain", "Receive");
  });

  it("Should the title for the wallet public key and input be visible and contain a text message", () => {
    cy.get(".wallet-public-key-title")
      .should("be.visible")
      .and("contain", "Your Stellar Public Key");
    cy.get(".wallet-input").should("be.visible");
  });

  it("Should the wallet warning icon, a warning message and a button be visible and contain a text messager", () => {
    cy.get(".wallet-warning-text")
      .should("be.visible")
      .and(
        "contain",
        "his account is currently inactive. to send 10,000 test lumen (XLM) to the Stellar public key displayed above."
      );

    cy.get(".wallet-warning-icon").should("be.visible");
    cy.get(".button-add-lumens")
      .should("be.visible")
      .and("contain", "Click here");
  });

  it("Should the title for payments and the paragraph for payment history be visible and contain a text message", () => {
    cy.get(".wallet-payments-title")
      .should("be.visible")
      .and("contain", "Payments History");
    cy.get(".wallet-payments-text")
      .should("be.visible")
      .and("contain", "There are no payments to show.");
  });

  it("Should the title for payments and the paragraph for payment history be visible and contain a text message", () => {
    cy.get(".wallet-lp-title")
      .should("be.visible")
      .and("contain", "Liquidity pool transactions");
    cy.get(".wallet-lp-text")
      .should("be.visible")
      .and(
        "contain",
        "There are no recent liquidity pool transactions to show."
      );
  });
});
