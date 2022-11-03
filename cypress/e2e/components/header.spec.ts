describe("Header test",()=>{
  context("Verifying header on iphone-x",()=>{

    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it('should ', function () {});
  })
  context("Verifying header on ipad",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it('should ', function () {});

  })
  context("Verifying header on macbook-13",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it('should verify dmc logo', function () {
      cy.findByTestId("dmc_logo").should("be.visible");
    });

    it('should verify get dfi button', function () {
      cy.findByTestId("get_dfi").should("be.visible");
    });

    it('should verify navigation menu', function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });

  })
})
