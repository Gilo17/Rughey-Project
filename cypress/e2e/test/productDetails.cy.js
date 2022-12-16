import Authentication from "../page/authentication.page"

describe.only("Product details", () => {
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
    it('Category of item computer should be visible', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").should('be.visible').click()
        cy.url().should('contain','quality-mousepad')
        cy.get('.css-1ccau2i').should('be.visible')
    })
    it('item name should be visible', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").should('be.visible').click()
        cy.url().should('contain','quality-mousepad')
        cy.get("div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']").should('be.visible')
    })
    it('should be able to sign out from products details page', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-mousepad.jpg']").should('be.visible').click()
        cy.url().should('contain','quality-mousepad')
        cy.get("#top-sign-out").click()
        cy.get('#login-text').should('be.visible')

    })
})