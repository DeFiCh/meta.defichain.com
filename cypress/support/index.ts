declare namespace Cypress{
  interface Chainable{
    verifyHeaderFooter(locator:string):void;
    verifyFooterElements(locator:string,label:string):void;
    verifyFooterLinks(locator:string,content:string,link:string):void;
  }
}
