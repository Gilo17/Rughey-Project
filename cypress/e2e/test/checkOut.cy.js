import Checkout from "../page/checkOut.page"
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
                cy.get('[type="email"]').type("test1@tester.com");
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it('add single item to cart', () => {
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get(".snipcart-cart-header").should("be.visible")
        cy.get('.snipcart-base-button__wrapper').should("be.visible")

    })
    it('should checkout items in the cart', () => {
        Checkout.checkOutFlow('Rughey Gilzeane', 'gilzeane12@yahoo.com', 'Ivory Way', 'Mount Pleasant', 'Jamaica', 'St Andrew', '12345')
        Checkout.paymentInfo(' 4242 4242 4242 4242', '0634', '123')
    })
})




















