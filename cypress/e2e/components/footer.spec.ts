import {footerElements, footerLinks} from "../../fixtures/footer";

describe("Footer section", () => {
  context("Verifying header on iphone-x", () => {
    before(() => {
      cy.visit("/");
      cy.viewport("iphone-x");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el)=>{
        cy.verifyFooterElements(el.locator,el.label);
      })

      footerLinks.forEach((f) => {
        cy.verifyFooterLinks(f.locator,f.content,f.link);
      });
    });
  });

  context("Verifying header on ipad", () => {
    before(() => {
      cy.visit("/");
      cy.viewport("ipad-2");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el)=>{
        cy.verifyFooterElements(el.locator,el.label);
      })

      footerLinks.forEach((f) => {
        cy.verifyFooterLinks(f.locator,f.content,f.link);
      });
    });
  });

  context("Verifying header on macbook-13", () => {
    before(() => {
      cy.visit("/");
      cy.viewport("macbook-13");
    });

    it("should verify footer elements", function () {
      cy.scrollTo("bottom");
      footerElements.forEach((el)=>{
        cy.verifyFooterElements(el.locator,el.label);
      })

      footerLinks.forEach((f) => {
        cy.verifyFooterLinks(f.locator,f.content,f.link);
      });
    });
  });
});
