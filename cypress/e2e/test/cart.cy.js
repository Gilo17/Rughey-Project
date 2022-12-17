
import Authentication from "../page/authentication.page"

describe('Cart', () => {
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
    it('should increase item in cart', () => {

        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        cy.get("button[title='Increment quantity']").click()
        cy.get(".snipcart-item-quantity__total-price").should('be.visible')
    })

    it('should decrease item in cart', () => {

        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        cy.get("button[title='Decrement quantity']").click()
        cy.get(".snipcart-item-quantity__total-price").should('be.visible')
    })

    it('should return to product page', () => {

        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        cy.get(".snipcart-modal__close-title.snipcart__font--std").click()
        cy.url().should('contain,','products')
    })
})
