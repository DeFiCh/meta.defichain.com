const ul_Developer_List = [
  {locator: "Developers_list", list_element: "Documentation"},
  {locator: "Developers_list", list_element: "Releases"},
  {locator: "Developers_list", list_element: "GitHub"},
  {locator: "Developers_list", list_element: "Developer's Chatroom"}
]

const ul_Ecosystem_List = [
  {locator: "Ecosystem_list", list_element: "DMC Explorer"},
  {locator: "Ecosystem_list", list_element: "DeFiChain.com"},
  {locator: "Ecosystem_list", list_element: "Whitepaper"},
  {locator: "Ecosystem_list", list_element: "Wallets"}
]

const ul_Community_List = [
  {locator: "Community_list", list_element: "Discord"},
  {locator: "Community_list", list_element: "Twitter"},
  {locator: "Community_list", list_element: "YouTube"},
  {locator: "Community_list", list_element: "Telegram"}
]
const nav_Developer_Dropdown_Links = [
  {locator: "Documentation_link", link: "/"},
  {locator: "Releases_link", link: "https://github.com/DeFiCh/metachain/releases"},
  {locator: "GitHub_link", link: "https://github.com/DeFiCh/metachain"},
  {locator: "Developer\'s Chatroom_link", link: "https://discord.gg/g5U4pvNtbS"}
]

const nav_Ecosystem_Dropdown_Links = [
  {locator: "DMC Explorer_link", link: "/"},
  {locator: "DeFiChain.com_link", link: "https://defichain.com"},
  {locator: "Whitepaper_link", link: "/"},
  {locator: "Wallets_link", link: "/"}
]

const nav_Community_Dropdown_Links = [
  {locator: "Discord_link", link: "https://discord.gg/U268gQUqQt"},
  {locator: "Twitter_link", link: "https://twitter.com/defichain"},
  {locator: "YouTube_link", link: "https://www.youtube.com/c/DeFiChain"},
  {locator: "Telegram_link", link: "https://t.me/defiblockchain"}
]

const web_dev_Developer_Dropdown_Links = [
  {locator: "hid_Documentation", links: "/"},
  {locator: "hid_Releases", links: "https://github.com/DeFiCh/metachain/releases"},
  {locator: "hid_GitHub", links: "https://github.com/DeFiCh/metachain"},
  {locator: "hid_Developer\'s Chatroom", links: "https://discord.gg/g5U4pvNtbS"}
]
const web_dev_Ecosystem_Dropdown_Links = [
  {locator: "hid_DMC Explorer", links: "/"},
  {locator: "hid_DeFiChain.com", links: "https://defichain.com"},
  {locator: "hid_Whitepaper", links: "/"},
  {locator: "hid_Wallets", links: "/"}
]
const web_dev_Community_Dropdown_Links = [
  {locator: "hid_Discord", links: "https://discord.gg/U268gQUqQt"},
  {locator: "hid_Twitter", links: "https://twitter.com/defichain"},
  {locator: "hid_YouTube", links: "https://www.youtube.com/c/DeFiChain"},
  {locator: "hid_Telegram", links: "https://t.me/defiblockchain"}
]

describe("Header test", () => {

  context("Verifying header on iphone-x", () => {

    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("iphone-x");
    });

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc_logo").should("be.visible");
    });

    it("should verify hamburger icon", function () {
      cy.findByTestId("hamburger_icon").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hamburger_icon").click();
      cy.findByTestId("mob_Developers").should("be.visible").contains("Developers").click();

      ul_Developer_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Developer_Dropdown_Links.forEach((nav_links) => {
        cy.findByTestId(nav_links.locator).should("have.attr", "href").and("equal", nav_links.link);
      })
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("mob_Ecosystem").should("be.visible").contains("Ecosystem").click();

      ul_Ecosystem_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Ecosystem_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator).should("have.attr", "href").and("equal", ul.link);
      })
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("mob_Community").should("be.visible").contains("Community").click();

      ul_Community_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Community_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator).should("have.attr", "href").and("equal", ul.link);
      })
    });

  })


  context("Verifying header on ipad", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("ipad-2");
    });

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc_logo").should("be.visible");
    });

    it("should verify hamburger icon", function () {
      cy.findByTestId("hamburger_icon").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hamburger_icon").click();
      cy.findByTestId("mob_Developers").should("be.visible").contains("Developers").click();

      ul_Developer_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Developer_Dropdown_Links.forEach((nav_links) => {
        cy.findByTestId(nav_links.locator).should("have.attr", "href").and("equal", nav_links.link);
      })
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("mob_Ecosystem").should("be.visible").contains("Ecosystem").click();

      ul_Ecosystem_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Ecosystem_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator).should("have.attr", "href").and("equal", ul.link);
      })
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("mob_Community").should("be.visible").contains("Community").click();

      ul_Community_List.forEach((ul) => {
        cy.findByTestId(ul.locator).should("be.visible").contains(ul.list_element);
      })

      nav_Community_Dropdown_Links.forEach((ul) => {
        cy.findByTestId(ul.locator).should("have.attr", "href").and("equal", ul.link);
      })
    });

  })


  context("Verifying header on macbook-13", () => {
    before(() => {
      cy.visit("/");
    });

    beforeEach(() => {
      cy.viewport("macbook-13");
    });

    it("should verify dmc logo", function () {
      cy.findByTestId("dmc_logo").should("be.visible");
    });

    it("should verify get dfi button", function () {
      cy.findByTestId("get_dfi").should("be.visible");
    });

    it("should verify navigation menu", function () {
      cy.findByTestId("nav_menu").should("be.visible");
    });

    it("should verify Developers section in nav menu", function () {
      cy.findByTestId("hid_Developers").trigger("mouseover");

      ul_Developer_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      })

      web_dev_Developer_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator).should("have.attr", "href").and("equal", weblinks.links);
      })
    });

    it("should verify Ecosystem section in nav menu", function () {
      cy.findByTestId("hid_Ecosystem").trigger("mouseover");

      ul_Ecosystem_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      })

      web_dev_Ecosystem_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator).should("have.attr", "href").and("equal", weblinks.links);
      })
    });

    it("should verify Community section in nav menu", function () {
      cy.findByTestId("hid_Community").trigger("mouseover");

      ul_Community_List.forEach((ul) => {
        cy.contains("ul", ul.list_element);
      })

      web_dev_Community_Dropdown_Links.forEach((weblinks) => {
        cy.findByTestId(weblinks.locator).should("have.attr", "href").and("equal", weblinks.links);
      })
    });
  })
})
