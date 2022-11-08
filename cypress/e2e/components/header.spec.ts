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

    it('should verify Developers section in nav menu', function () {
      cy.findByTestId("hid_Developers").trigger("mouseover");
      cy.get('.hidden').invoke('show');
      cy.findByTestId('hid_Documentation').should("be.visible");//.invoke('removeAttr', 'target').click();
     // cy.findByTestId('hid_Documentation').invoke('removeAttr', 'target').click()
     // cy.go("back");

      //chainable children approach
      // cy.get("ul.px-8 group cursor-pointer relative").children("li.z-[1] hidden before:hover-menu-gap group-hover:animate-fade-in group-hover:block hover:block group-hover:opacity-100 absolute top-[64px] bg-white-50 rounded-[10px] w-[255px]").
      // should("have.attr","href").and("include","/");

     // chainable parent approach
      cy.get("li.z-[1] hidden before:hover-menu-gap group-hover:animate-fade-in group-hover:block hover:block group-hover:opacity-100 absolute top-[64px] bg-white-50 rounded-[10px] w-[255px]").parents("ul.px-8 group cursor-pointer relative").
      should("have.attr","href").and("include","/");


    });

  })
})
