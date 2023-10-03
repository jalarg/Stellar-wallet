const ProjectURL = Cypress.env("BASE_URL");

describe("Navigation", () => {
  it("Go to the website:", () => {
    console.log(ProjectURL, "ProjectURL")
    cy.visit(ProjectURL);
  });
});
