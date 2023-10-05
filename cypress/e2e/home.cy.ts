import { projectUrl, stellarIconUrl } from "../support/constants";

beforeEach(() => {
  cy.visit(projectUrl);
});

describe("Home: UI and functionality:", () => {
  it("Should the Stellar logo be visible", () => {
    cy.get('[data-cy="stellar-home-logo"]').should("be.visible");
  });

  it("Should the title and two paragraphs be visible and contain the text description", () => {
    cy.get('[data-cy="rocket-title"]')
      .should("be.visible")
      .and("contain", "Rocket");
    cy.get('[data-cy="rocket-description-1"]')
      .should("be.visible")
      .and("contain", "The easiest way to connect with a wallet");
    cy.get('[data-cy="rocket-description-2"]')
      .should("be.visible")
      .and("contain", "Sign in methods");
  });

  it("Should show a button to generate connect", () => {
    cy.get('[data-cy="connect"]').as("connectButton");

    cy.get("@connectButton")
      .should("exist")
      .should("be.visible")
      .and("contain", "Connect with a secret key");
  });

  it("Should show a button to generate a pair of new keys and should  have create public and private key functionality", () => {
    cy.get('[data-cy="register"]').as("registerButton");
    cy.get("@registerButton")
      .should("exist")
      .and("have.text", "Generate key pair for a new account");
    cy.get("@registerButton").click();
    cy.get('[data-cy="private-key"]').as("privateKeyInput");
    cy.get('[data-cy="public-key"]').as("publicKeyInput");
    cy.get('[data-cy="confirm-wallet"]').as("confirmWalletButton");
    cy.get('[data-cy="go-back"]').as("goBackButton");
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
  it("Should the navbar container be visible", () => {
    cy.get('[data-cy="navbar-container"]').should("exist").and("be.visible");
  });

  it("Should the Stellar logo be visible and have a href", () => {
    cy.get('[data-cy="navbar-container"]').should("exist").and("be.visible");
    cy.get('[data-cy="stellar-icon"]')
      .should("be.visible")
      .and("have.attr", "href", stellarIconUrl);
  });

  it("Should the theme icon exist and have the toggle theme functionality", () => {
    cy.get('[data-cy="theme-button-light"]').as("themeButtonLight");
    cy.get("@themeButtonLight").should("exist");
    cy.get('[data-cy="theme-button-dark"]').should("not.exist");
    cy.get("@themeButtonLight").click().should("not.exist");
    cy.get('[data-cy="theme-button-dark"]').should("exist");
    cy.get("@themeButtonLight").should("not.exist");
  });
});
