declare namespace Cypress {
  interface Chainable {
    verifyHeaderFooter(locator: string): void;
    verifyElementContains(locator: string, label: string): void;
    verifyLinks(locator: string, content: string, link: string): void;
  }
}
