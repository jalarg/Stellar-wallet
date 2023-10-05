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
});
