import { projectUrl } from "../support/constants";

beforeEach(() => {
  cy.visit(projectUrl);
});

describe("Home: UI and functionality:", () => {
  it("Home UI: Stellar logo", () => {
    cy.get('[data-cy="stellar-home-logo"]').should("be.visible");
  });
  it("Home UI: Should show a title and two paragraphs", () => {
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

  it("Button connect: Should show a button to generate connect", () => {
    cy.get('[data-cy="connect"]')
      .should("be.visible")
      .and("contain", "Connect with a secret key");
    cy.get('[data-cy="connect"]').should("exist");
  });

  it("Button create wallet: Should show a button to generate a pair of new keys", () => {
    cy.get('[data-cy="register"]').should("exist");
    cy.get('[data-cy="register"]').should(
      "have.text",
      "Generate key pair for a new account"
    );
    cy.get('[data-cy="public-key"]').should("not.exist");
    cy.get('[data-cy="private-key"]').should("not.exist");
    cy.get('[data-cy="confirm-wallet"]').should("not.exist");
    cy.get('[data-cy="go-back"]').should("not.exist");
    cy.get('[data-cy="register"]').click();
    cy.get('[data-cy="public-key"]').should("exist");
    cy.get('[data-cy="private-key"]').should("exist");
    cy.get('[data-cy="confirm-wallet"]').should("exist");
    cy.get('[data-cy="go-back"]').should("exist");
    cy.get('[data-cy="confirm-wallet"]').should("have.text", "Confirm wallet");
    cy.get('[data-cy="go-back"]').should("have.text", "Go back");
  });
});
