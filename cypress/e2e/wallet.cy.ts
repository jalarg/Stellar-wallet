import { projectUrl, walletCredentials } from "../support/constants";

beforeEach(() => {
  cy.visit(projectUrl);
});

describe("Wallet UI", () => {
  beforeEach(() => {
    cy.get(".button-connect").as("connectButton");
    cy.get("@connectButton").click();
    cy.get(".ant-checkbox-input").click({ force: true });
    cy.get(".button-modal-connectSecretKeyWarning").as(
      "connectSecretKeyWarning"
    );
    cy.get("@connectSecretKeyWarning").click({ force: true });
    cy.get(".input-private-key").type(walletCredentials.secretKey);
    cy.get(".button-modal-connectAddSecretKey").click({ force: true });
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
describe("Send transaction modal", () => {
  beforeEach(() => {
    cy.get(".button-connect").as("connectButton");
    cy.get("@connectButton").click();
    cy.get(".ant-checkbox-input").click({ force: true });
    cy.get(".button-modal-connectSecretKeyWarning").as(
      "connectSecretKeyWarning"
    );
    cy.get("@connectSecretKeyWarning").click({ force: true });
    cy.get(".input-private-key").type(walletCredentials.secretKey);
    cy.get(".button-modal-connectAddSecretKey").click({ force: true });
    cy.get(".button-send").click();
  });

  it("Should the modal container be visible", () => {
    cy.get(".modal-container-SendTransaction")
      .should("exist")
      .and("be.visible");
  });

  it("Should the title be visible and contain the text", () => {
    cy.get(".modal-title-SendTransaction")
      .should("be.visible")
      .and("contain", "Send Lumens");
  });

  it("Should show a button to send the transaction", () => {
    cy.get(".button-modal-SendTransaction")
      .should("exist")
      .and("have.text", "Send");
  });

  it("Should show a button to cancel and go back", () => {
    cy.get(".button-modal-cancel").should("exist").and("have.text", "Cancel");
  });
});
describe("Receive transaction modal", () => {
  beforeEach(() => {
    cy.get(".button-connect").as("connectButton");
    cy.get("@connectButton").click();
    cy.get(".ant-checkbox-input").click({ force: true });
    cy.get(".button-modal-connectSecretKeyWarning").as(
      "connectSecretKeyWarning"
    );
    cy.get("@connectSecretKeyWarning").click({ force: true });
    cy.get(".input-private-key").type(walletCredentials.secretKey);
    cy.get(".button-modal-connectAddSecretKey").click({ force: true });
    cy.get(".button-receive").click();
  });

  it("Should the modal container be visible", () => {
    cy.get(".modal-container-ReceiveTransaction")
      .should("exist")
      .and("be.visible");
  });

  it("Should the title be visible and contain the text", () => {
    cy.get(".modal-title-ReceiveTransaction")
      .should("be.visible")
      .and("contain", "Receive Lumens");
  });

  it("Should the QR visible and and exist", () => {
    cy.get(".modal-receive-qr").should("exist").and("be.visible");
  });

  it("Should the publicKey be visible and and exist", () => {
    cy.get(".modal-publicKey-ReceiveTransaction")
      .should("exist")
      .and("be.visible");
  });

  it("Should the copy icon be visible and exist", () => {
    cy.get(".modal-receive-copy-icon").should("exist").and("be.visible");
  });
});
