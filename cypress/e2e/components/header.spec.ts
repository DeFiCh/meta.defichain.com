describe("Header test", () => {

  context("Verifying header on iphone-x", () => {

    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it('should ', function () {
    });
  })


  context("Verifying header on ipad", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it('should ', function () {
    });

  })


  context("Verifying header on macbook-13", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc_logo").should("be.visible");
    });

    it('should verify get dfi button', function () {
      cy.findByTestId("get_dfi").should("be.visible");
    });

    it('should verify navigation menu', function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });

    it('should verify Developers section in nav menu', function () {
      cy.findByTestId("hid_Developers").trigger("mouseover");
      cy.findByTestId('hid_Documentation').should("have.attr","href").and("equal","/");
      cy.findByTestId('hid_Releases').should("have.attr","href").and("equal","https://github.com/DeFiCh/metachain/releases");
      cy.findByTestId('hid_GitHub').should("have.attr","href").and("equal","https://github.com/DeFiCh/metachain");
      cy.findByTestId('hid_Developer\'s Chatroom').should("have.attr","href").and("equal","https://discord.gg/g5U4pvNtbS");
    });

    it('should verify Ecosystem section in nav menu', function () {
      cy.findByTestId("hid_Ecosystem").click();//trigger("mouseover");
      cy.findByTestId("hid_DMC Explorer").should("have.attr","href").and("equal","/");
      cy.findByTestId("hid_DeFiChain.com").should("have.attr","href").and("equal","https://defichain.com");
      cy.findByTestId("hid_Whitepaper").should("have.attr","href").and("equal","/");
      cy.findByTestId("hid_Wallets").should("have.attr","href").and("equal","/");
    });

    it('should verify Community section in nav menu', function () {
      cy.findByTestId("hid_Community").trigger("mouseover");
      cy.findByTestId("hid_Discord").should("have.attr","href").and("equal","https://discord.gg/U268gQUqQt");
      cy.findByTestId("hid_Twitter").should("have.attr","href").and("equal","https://twitter.com/defichain");
      cy.findByTestId("hid_YouTube").should("have.attr","href").and("equal","https://www.youtube.com/c/DeFiChain");
      cy.findByTestId("hid_Telegram").should("have.attr","href").and("equal","https://t.me/defiblockchain");
    });
  })
})
