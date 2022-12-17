

import Authentication from "../page/authentication.page"

describe.only("Add to cart", () => {
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
    it('product details should be displayed when item is clicked', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").should('be.visible').click()
        cy.url().should('contain','quality-hat')
    })
    it('should return to product gallery page', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").should('be.visible').click()
        cy.get('.chakra-heading.css-18j379d').should('be.visible').click()
        cy.url().should('contain','products')
    })
    it('product name should match image', () => {
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").scrollIntoView()
        cy.wait(6000)
        cy.get(".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']").should('be.visible').click()
        cy.get('.chakra-heading.css-18j379d').should('be.visible').click()
        cy.get("div[id='product-1'] p[class='chakra-text css-1n64n71']").should("be.visible")
    })


})

