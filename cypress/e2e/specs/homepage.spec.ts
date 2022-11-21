import { locatorHeaderFooterList } from "../../fixtures/homepage";

const dmcDescription =
  "DeFi Meta Chain (DMC) is a powerful EVM-compatible blockchain parallel to DeFiChain, a leader in DeFi. Built to future proof trends, DMC achieves ecosystem scalability by providing developers with familiar tools to build the future of DeFi today.";

describe("Homepage test", () => {
  context("/ on iphone-x", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should verify header", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify homepage:", function () {
      cy.findByTestId("unlock-text").contains(
        "UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN"
      );
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains("Build next gen dApps with tools of the future");
      cy.findByTestId("dmc-desc").should("be.visible").contains(dmcDescription);
    });

    it("should verify footer", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });

  context("/ on ipad", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it("should verify header", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify homepage", function () {
      cy.findByTestId("unlock-text").contains(
        "UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN"
      );
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains("Build next gen dApps with tools of the future");
      cy.findByTestId("dmc-desc").should("be.visible").contains(dmcDescription);
    });

    it("should verify footer", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });

  context("/ on macbook-13", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should verify header", function () {
      cy.findByTestId("nav-menu").invoke("show");
      cy.findByTestId("nav-menu").should("be.visible");
    });

    it("should verify homepage", function () {
      cy.findByTestId("unlock-text").contains(
        "UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN"
      );
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains("Build next gen dApps with tools of the future");
      cy.findByTestId("dmc-desc").should("be.visible").contains(dmcDescription);
    });

    it("should verify footer", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });
});
