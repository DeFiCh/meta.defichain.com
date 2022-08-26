context("/ on iphone-x", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-x");
  });

  it("should have wrytes logo displayed", () => {
    cy.findByTestId("title_keng_ye_delete_me").should('contain.text', 'DeFi Meta Chain')
  });
});
