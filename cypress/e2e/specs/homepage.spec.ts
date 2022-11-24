const dmcDescription =
  "DeFi Meta Chain (DMC) is a powerful EVM-compatible blockchain parallel to DeFiChain, a leader in DeFi. Built to future proof trends, DMC achieves ecosystem scalability by providing developers with familiar tools to build the future of DeFi today.";

describe.only("Homepage test", () => {
  context("/ on iphone-x", () => {
    it("should verify countdown", function () {
      cy.visit("/");
      cy.viewport("iphone-x");
      cy.findByTestId("countdown");
    });
  });

  context("/ on ipad", () => {
    it("should verify countdown", function () {
      cy.visit("/");
      cy.viewport("ipad-2");
      cy.findByTestId("countdown");
    });
  });

  context("/ on macbook-13", () => {
    it("should verify countdown", function () {
      cy.visit("/");
      cy.viewport("macbook-13");
      cy.findByTestId("countdown");
    });
  });
});

describe.skip("Homepage test", () => {
  context("/ on iphone-x", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.viewport("iphone-x");
    });

    it("should verify header is visible", function () {
      cy.findByTestId("dmc-header").should("be.visible");
    });

    it("should verify 'Unlock' section contains the text", function () {
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

    it("should verify 'Unlock' section contains the text", function () {
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

    it("should verify 'Unlock' section contains the text", function () {
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

    it("should verify footer is visible", function () {
      cy.findByTestId("dmc-footer").should("be.visible");
    });
  });
});
