import { projectUrl, stellarUrl, githubUrl } from "../support/constants";

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

  it("Should the github logo be visible and have a href", () => {
    cy.get(".github-icon")
      .should("be.visible")
      .and("have.attr", "href", githubUrl);
  });
});
