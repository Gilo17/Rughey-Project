import search from "../page/search.page"
import Authentication from "../page/authentication.page"

describe('CheckOut', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("gilzene@yahoo.com");
                cy.get('[type="password"]').type("Liverpool123", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it('should search for hats',()=>{
       search.Search('Hat')
       cy.get("div[id='product-1'] p[class='chakra-text css-1n64n71']").should('be.visible')
       cy.get("div[id='product-0'] p[class='chakra-text css-1n64n71']").should('be.visible')
    })
    it('should search for red couch',()=>{
        search.Search('red couch')
        cy.get(".chakra-text.css-1n64n71").should('be.visible')
        
     })
     it('item not in product list should not be visible',()=>{
        search.Search('water')
        cy.get(".css-12qzrsi").should('be.visible')
       
     })
})