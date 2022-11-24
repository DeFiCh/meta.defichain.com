import { footerElements, footerLinks } from "../../fixtures/footer";

describe.only("Footer section", () => {
  context("/ on iphone-x", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("iphone-x");
    });

    it("should verify countdown", function () {
      cy.findByTestId("countdown");
    });
  });

  context("/ on ipad", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("ipad-2");
    });

    it("should verify countdown", function () {
      cy.findByTestId("countdown");
    });
  });

  context("/ on macbook-13", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("macbook-13");
    });

    it("should verify countdown", function () {
      cy.findByTestId("countdown");
    });
  });
});
describe.skip("Footer section", () => {
  context("Verifying footer on iphone-x", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("iphone-x");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el) => {
        cy.verifyElementContains(el.locator, el.label);
      });

      footerLinks.forEach((f) => {
        cy.verifyLinks(f.locator, f.content, f.link);
      });
    });
  });

  context("Verifying footer on ipad", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("ipad-2");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el) => {
        cy.verifyElementContains(el.locator, el.label);
      });

      footerLinks.forEach((f) => {
        cy.verifyLinks(f.locator, f.content, f.link);
      });
    });
  });

  context("Verifying footer on macbook-13", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("macbook-13");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el) => {
        cy.verifyElementContains(el.locator, el.label);
      });

      footerLinks.forEach((f) => {
        cy.verifyLinks(f.locator, f.content, f.link);
      });
    });
  });
});
