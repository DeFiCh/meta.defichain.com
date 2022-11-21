import "@testing-library/cypress/add-commands";

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Intercept SSR /_next/data/* page load click and wait
       * @param {() => void} exec to execute before waiting
       */
      interceptServerSideWait(exec: () => void): Chainable<null>;
    }
  }
}

Cypress.Commands.add("interceptServerSideWait", (exec: () => void) => {
  cy.intercept("GET", "/_next/data/**").as("nextData");
  exec();
  cy.wait("@nextData");
  cy.wait(500);
});

Cypress.Commands.add("verifyElementContains", (locator, label) => {
  cy.findByTestId(locator).should("be.visible").contains(label);
});

Cypress.Commands.add("verifyLinks", (locator, content, link) => {
  cy.findByTestId(locator)
    .should("be.visible")
    .contains(content)
    .should("have.attr", "href")
    .and("include", link);
});
