describe("Footer section",()=>{

  context("Verifying header on iphone-x",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it('should verify footer elements', function () {
      cy.scrollTo('bottom')
      cy.get('.hidden').invoke('show');
      cy.findByTestId("Developers").should("be.visible").contains("Developers");
      cy.findByTestId("Documentation").should("be.visible").contains("Documentation");
      cy.findByTestId("Releases").should("be.visible").contains("Releases");
      cy.findByTestId("GitHub").should("be.visible").contains("GitHub");
      cy.findByTestId("Developer's Chatroom").should("be.visible").contains("Developer's Chatroom");
    });
  })

  context("Verifying header on ipad",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it('should verify footer elements', function () {
      cy.scrollTo('bottom')
      cy.get('.hidden').invoke('show');
      cy.findByTestId("Developers").should("be.visible").contains("Developers");
      cy.findByTestId("Documentation").should("be.visible").contains("Documentation");
      cy.findByTestId("Releases").should("be.visible").contains("Releases");
      cy.findByTestId("GitHub").should("be.visible").contains("GitHub");
      cy.findByTestId("Developer's Chatroom").should("be.visible").contains("Developer's Chatroom");
    });
  })

  context("Verifying header on macbook-13",()=>{
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it('should verify footer elements', function () {
      cy.scrollTo('bottom')
      cy.get('.hidden').invoke('show');
      cy.findByTestId("Developers").should("be.visible").contains("Developers");
      cy.findByTestId("Documentation").should("be.visible").contains("Documentation");
      cy.findByTestId("Releases").should("be.visible").contains("Releases");
      cy.findByTestId("GitHub").should("be.visible").contains("GitHub");
      cy.findByTestId("Developer's Chatroom").should("be.visible").contains("Developer's Chatroom");
    });
  })

})
