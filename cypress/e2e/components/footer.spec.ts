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
      cy.findByTestId("id_Documentation").should("be.visible").contains("Documentation").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Releases").should("be.visible").contains("Releases").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain/releases');
      cy.findByTestId("id_GitHub").should("be.visible").contains("GitHub").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain');
      cy.findByTestId("id_Developer's Chatroom").should("be.visible").contains("Developer's Chatroom").should('have.attr', 'href').and('include', 'https://discord.gg/g5U4pvNtbS');

      cy.findByTestId("Ecosystem").should("be.visible").contains("Ecosystem");
      cy.findByTestId("id_DMC Explorer").should("be.visible").contains("DMC Explorer").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_DeFiChain.com").should("be.visible").contains("DeFiChain.com").should('have.attr', 'href').and('include', 'https://defichain.com');
      cy.findByTestId("id_Whitepaper").should("be.visible").contains("Whitepaper").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Wallets").should("be.visible").contains("Wallets").should('have.attr', 'href').and('include', '_blank');

      cy.findByTestId("Community").should("be.visible").contains("Community");
      cy.findByTestId("id_Discord").should("be.visible").contains("Discord").should('have.attr', 'href').and('include', 'https://discord.gg/U268gQUqQt');
      cy.findByTestId("id_Twitter").should("be.visible").contains("Twitter").should('have.attr', 'href').and('include', 'https://twitter.com/defichain');
      cy.findByTestId("id_YouTube").should("be.visible").contains("YouTube").should('have.attr', 'href').and('include', 'https://www.youtube.com/c/DeFiChain');
      cy.findByTestId("id_Telegram").should("be.visible").contains("Telegram").should('have.attr', 'href').and('include', 'https://t.me/defiblockchain');

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
      cy.findByTestId("id_Documentation").should("be.visible").contains("Documentation").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Releases").should("be.visible").contains("Releases").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain/releases');
      cy.findByTestId("id_GitHub").should("be.visible").contains("GitHub").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain');
      cy.findByTestId("id_Developer's Chatroom").should("be.visible").contains("Developer's Chatroom").should('have.attr', 'href').and('include', 'https://discord.gg/g5U4pvNtbS');

      cy.findByTestId("Ecosystem").should("be.visible").contains("Ecosystem");
      cy.findByTestId("id_DMC Explorer").should("be.visible").contains("DMC Explorer").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_DeFiChain.com").should("be.visible").contains("DeFiChain.com").should('have.attr', 'href').and('include', 'https://defichain.com');
      cy.findByTestId("id_Whitepaper").should("be.visible").contains("Whitepaper").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Wallets").should("be.visible").contains("Wallets").should('have.attr', 'href').and('include', '_blank');

      cy.findByTestId("Community").should("be.visible").contains("Community");
      cy.findByTestId("id_Discord").should("be.visible").contains("Discord").should('have.attr', 'href').and('include', 'https://discord.gg/U268gQUqQt');
      cy.findByTestId("id_Twitter").should("be.visible").contains("Twitter").should('have.attr', 'href').and('include', 'https://twitter.com/defichain');
      cy.findByTestId("id_YouTube").should("be.visible").contains("YouTube").should('have.attr', 'href').and('include', 'https://www.youtube.com/c/DeFiChain');
      cy.findByTestId("id_Telegram").should("be.visible").contains("Telegram").should('have.attr', 'href').and('include', 'https://t.me/defiblockchain');

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
      cy.findByTestId("id_Documentation").should("be.visible").contains("Documentation").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Releases").should("be.visible").contains("Releases").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain/releases');
      cy.findByTestId("id_GitHub").should("be.visible").contains("GitHub").should('have.attr', 'href').and('include', 'https://github.com/DeFiCh/metachain');
      cy.findByTestId("id_Developer's Chatroom").should("be.visible").contains("Developer's Chatroom").should('have.attr', 'href').and('include', 'https://discord.gg/g5U4pvNtbS');

      cy.findByTestId("Ecosystem").should("be.visible").contains("Ecosystem");
      cy.findByTestId("id_DMC Explorer").should("be.visible").contains("DMC Explorer").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_DeFiChain.com").should("be.visible").contains("DeFiChain.com").should('have.attr', 'href').and('include', 'https://defichain.com');
      cy.findByTestId("id_Whitepaper").should("be.visible").contains("Whitepaper").should('have.attr', 'href').and('include', '_blank');
      cy.findByTestId("id_Wallets").should("be.visible").contains("Wallets").should('have.attr', 'href').and('include', '_blank');

      cy.findByTestId("Community").should("be.visible").contains("Community");
      cy.findByTestId("id_Discord").should("be.visible").contains("Discord").should('have.attr', 'href').and('include', 'https://discord.gg/U268gQUqQt');
      cy.findByTestId("id_Twitter").should("be.visible").contains("Twitter").should('have.attr', 'href').and('include', 'https://twitter.com/defichain');
      cy.findByTestId("id_YouTube").should("be.visible").contains("YouTube").should('have.attr', 'href').and('include', 'https://www.youtube.com/c/DeFiChain');
      cy.findByTestId("id_Telegram").should("be.visible").contains("Telegram").should('have.attr', 'href').and('include', 'https://t.me/defiblockchain');

    });
  })

})
