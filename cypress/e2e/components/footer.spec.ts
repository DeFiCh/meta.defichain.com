const footerLinks = [
  {
    locator: "id-Documentation",
    content: "Documentation",
    link: "",
  },
  {
    locator: "id-Releases",
    content: "Releases",
    link: "https://github.com/DeFiCh/metachain/releases",
  },
  {
    locator: "id-GitHub",
    content: "GitHub",
    link: "https://github.com/DeFiCh/metachain",
  },
  {
    locator: "id-Developer's Chatroom",
    content: "Developer's Chatroom",
    link: "https://discord.gg/g5U4pvNtbS",
  },
  {
    locator: "id-DMC Explorer",
    content: "DMC Explorer",
    link: "",
  },
  {
    locator: "id-DeFiChain.com",
    content: "DeFiChain.com",
    link: "https://defichain.com",
  },
  {
    locator: "id-Whitepaper",
    content: "Whitepaper",
    link: "",
  },
  {
    locator: "id-Wallets",
    content: "Wallets",
    link: "",
  },
  {
    locator: "id-Discord",
    content: "Discord",
    link: "https://discord.gg/U268gQUqQt",
  },
  {
    locator: "id-Twitter",
    content: "Twitter",
    link: "https://twitter.com/defichain",
  },
  {
    locator: "id-YouTube",
    content: "YouTube",
    link: "https://www.youtube.com/c/DeFiChain",
  },
  {
    locator: "id-Telegram",
    content: "Telegram",
    link: "https://t.me/defiblockchain",
  },
];
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
