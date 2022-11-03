describe("",()=>{

  context("Verifying header on iphone-x",()=>{

  })

  context("Verifying header on ipad",()=>{

  })

  context("Verifying header on macbook-13",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it('should verify footer elements', function () {
      cy.findByTestId("Developers").should("be.visible").contains("Developers");
      cy.findByTestId("Documentation").should("be.visible").contains("Documentation");
      cy.findByTestId("Releases").should("be.visible").contains("Releases");
      cy.findByTestId("GitHub").should("be.visible").contains("GitHub");
      cy.findByTestId("Developer's Chatroom").should("be.visible").contains("Developer's Chatroom");
    });
  })

})
