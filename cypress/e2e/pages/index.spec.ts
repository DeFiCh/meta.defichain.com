context("/ on iphone-x", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-x");
  });

  it("should have wrytes logo displayed", () => {
    cy.findByTestId("wrytes_logo").should("be.visible");
  });
});
