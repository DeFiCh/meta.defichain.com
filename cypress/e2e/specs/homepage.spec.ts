const dmc_descr="DeFi Meta Chain (DMC) is a powerful EVM-compatible blockchain parallel to DeFiChain, a leader in DeFi. Built to future proof trends, DMC achieves ecosystem scalability by providing developers with familiar tools to build the future of DeFi today."

describe("Homepage test",()=>{

  context("/ on iphone-x",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it('should verify header', function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });

    it('should verify homepage', function () {
      cy.findByTestId("unlock_text").contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      //cy.findByTestId("dmc_desc").contains(dmc_descr);
    });
  })

  context("/ on ipad",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it('should verify header', function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });

    it('should verify homepage', function () {
      cy.findByTestId("unlock_text").contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      //cy.findByTestId("dmc_desc").contains(dmc_descr);
    });

  })

  context("/ on macbook-13",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it('should verify header', function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });
    it('should verify homepage', function () {
      cy.findByTestId("unlock_text").contains("UNLOCK THE LIMITLESS POSSIBILITIES OF DEFICHAIN");
      cy.get('div.flex > div.flex > span.mb-8.font-bold').should("be.visible");
      //cy.findByTestId("dmc_desc").contains(dmc_descr);
    });

    it('should verify footer', function () {
      cy.findByTestId("dmc_footer1").should("be.visible");
    });
  })

})
