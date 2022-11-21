import { footerLinks } from "../../fixtures/footerdata";

describe("Footer section", () => {
  context("Verifying header on iphone-x", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      cy.get(".hidden").invoke("show");
      cy.findByTestId("id-Developers")
        .should("be.visible")
        .contains("Developers");
      cy.findByTestId("id-Ecosystem")
        .should("be.visible")
        .contains("Ecosystem");
      cy.findByTestId("id-Community")
        .should("be.visible")
        .contains("Community");
      footerLinks.forEach((f) => {
        cy.findByTestId(f.locator)
          .should("be.visible")
          .contains(f.content)
          .should("have.attr", "href")
          .and("include", f.link);
      });
    });
  });

  context("Verifying header on ipad", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      cy.get(".hidden").invoke("show");
      cy.findByTestId("id-Developers")
        .should("be.visible")
        .contains("Developers");
      cy.findByTestId("id-Ecosystem")
        .should("be.visible")
        .contains("Ecosystem");
      cy.findByTestId("id-Community")
        .should("be.visible")
        .contains("Community");
      footerLinks.forEach((f) => {
        cy.findByTestId(f.locator)
          .should("be.visible")
          .contains(f.content)
          .should("have.attr", "href")
          .and("include", f.link);
      });
    });
  });

  context("Verifying header on macbook-13", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      cy.get(".hidden").invoke("show");
      cy.findByTestId("id-Developers")
        .should("be.visible")
        .contains("Developers");
      cy.findByTestId("id-Ecosystem")
        .should("be.visible")
        .contains("Ecosystem");
      cy.findByTestId("id-Community")
        .should("be.visible")
        .contains("Community");
      footerLinks.forEach((f) => {
        cy.findByTestId(f.locator)
          .should("be.visible")
          .contains(f.content)
          .should("have.attr", "href")
          .and("include", f.link);
      });
    });
  });
});
