context("/ on iphone-x", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-x");
  });

  it("should have DMC logo displayed", () => {
    cy.findByTestId("dmc_logo").should('exist')
  });
});
