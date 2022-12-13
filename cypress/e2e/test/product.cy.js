import Authentication from "../page/authentication.page"
// import { faker } from '@faker-js/faker'

describe('Product page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Shows Products", () => {
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("test1@tester.com");
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").should('be.visible')
    });
    
})

