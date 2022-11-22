declare namespace Cypress {
  interface Chainable {
    verifyElementContains(locator: string, label: string): void;
    verifyLinks(locator: string, content: string, link: string): void;
  }
}
