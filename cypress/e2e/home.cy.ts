const projectUrl = Cypress.env("BASE_URL");

describe("Navigation", () => {
  it("Go to the website:", () => {
    console.log(projectUrl, "ProjectURL");
    cy.visit(projectUrl);
  });
});
