import {
  nav_Community_Dropdown_Links,
  nav_Developer_Dropdown_Links,
  nav_Ecosystem_Dropdown_Links,
  ul_Community_List,
  ul_Developer_List,
  ul_Ecosystem_List,
  web_dev_Community_Dropdown_Links,
  web_dev_Developer_Dropdown_Links,
  web_dev_Ecosystem_Dropdown_Links,
} from "../../fixtures/headerdata";

describe("Header test", () => {
  context("Verifying header on iphone-x", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc-logo").should("be.visible");
    });

    it("should verify hamburger icon", function () {
      cy.findByTestId("hamburger-icon").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hamburger-icon").click();
      cy.findByTestId("mob-Developers")
        .should("be.visible")
        .contains("Developers")
        .click();

      ul_Developer_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Developer_Dropdown_Links.forEach((nav_links) => {
        cy.findByTestId(nav_links.locator)
          .should("have.attr", "href")
          .and("equal", nav_links.link);
      });
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("mob-Ecosystem")
        .should("be.visible")
        .contains("Ecosystem")
        .click();

      ul_Ecosystem_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Ecosystem_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("have.attr", "href")
          .and("equal", ul.link);
      });
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("mob-Community")
        .should("be.visible")
        .contains("Community")
        .click();

      ul_Community_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Community_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("have.attr", "href")
          .and("equal", ul.link);
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

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc-logo").should("be.visible");
    });

    it("should verify hamburger icon", function () {
      cy.findByTestId("hamburger-icon").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hamburger-icon").click();
      cy.findByTestId("mob-Developers")
        .should("be.visible")
        .contains("Developers")
        .click();

      ul_Developer_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Developer_Dropdown_Links.forEach((nav_links) => {
        cy.findByTestId(nav_links.locator)
          .should("have.attr", "href")
          .and("equal", nav_links.link);
      });
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("mob-Ecosystem")
        .should("be.visible")
        .contains("Ecosystem")
        .click();

      ul_Ecosystem_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Ecosystem_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("have.attr", "href")
          .and("equal", ul.link);
      });
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("mob-Community")
        .should("be.visible")
        .contains("Community")
        .click();

      ul_Community_List.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("be.visible")
          .contains(ul.list_element);
      });

      nav_Community_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator)
          .should("have.attr", "href")
          .and("equal", ul.link);
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

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc-logo").should("be.visible");
    });

    it("should verify get dfi button", function () {
      cy.findByTestId("get-dfi").should("be.visible");
    });

    it("should verify navigation menu", function () {
      cy.findByTestId("nav-menu").invoke("show");
      cy.findByTestId("nav-menu").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hid-Developers").trigger("mouseover");

      ul_Developer_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      });

      web_dev_Developer_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator)
          .should("have.attr", "href")
          .and("equal", weblinks.links);
      });
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("hid-Ecosystem").trigger("mouseover");

      ul_Ecosystem_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      });

      web_dev_Ecosystem_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator)
          .should("have.attr", "href")
          .and("equal", weblinks.links);
      });
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("hid-Community").trigger("mouseover");

      ul_Community_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      });

      web_dev_Community_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator)
          .should("have.attr", "href")
          .and("equal", weblinks.links);
      });
    });
  });
});
