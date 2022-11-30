import { homePageText } from "../../fixtures/homepage";

describe("Homepage test", () => {
  context("/ on iphone-x", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("iphone-x");
    });

    it("should verify header is visible", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify text in section one", function () {
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains(homePageText.section_one.hint);
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains(homePageText.section_one.header);
      cy.findByTestId("dmc-desc")
        .should("be.visible")
        .contains(homePageText.section_one.description);
    });

    it("should verify footer is visible", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });

  context("/ on ipad", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("ipad-2");
    });

    it("should verify header is visible", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify text in section one", function () {
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains(homePageText.section_one.hint);
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains(homePageText.section_one.header);
      cy.findByTestId("dmc-desc")
        .should("be.visible")
        .contains(homePageText.section_one.description);
    });

    it("should verify footer is visible", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });

  context("/ on macbook-13", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("macbook-13");
    });

    it("should verify header is visible", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify text in section one", function () {
      cy.findByTestId("section-one-hint")
        .should("be.visible")
        .contains(homePageText.section_one.hint);
      cy.findByTestId("section-one-header")
        .should("be.visible")
        .contains(homePageText.section_one.header);
      cy.findByTestId("dmc-desc")
        .should("be.visible")
        .contains(homePageText.section_one.description);
    });

    it("should verify footer is visible", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });
});
