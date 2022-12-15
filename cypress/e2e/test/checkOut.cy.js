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
                cy.get('[type="email"]').type("gilzene@yahoo.com");
                cy.get('[type="password"]').type("Liverpool123", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it('checkout item', () => {
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get(".snipcart-cart-header").should("be.visible")
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        Checkout.checkOutFlow('Rughey Gilzeane', 'gilzeane12@yahoo.com', 'Ivory Way', 'Mount Pleasant', 'Jamaica', 'St Andrew', '12345')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('10/24')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type(123)
        cy.get('.snipcart-submit').click()
        cy.url().should('contain', 'checkout')
        cy.wait(6000)
        cy.get('.snipcart__font--subtitle').should('be.visible')

    })
    it('should not checkout with invalid email', () => {
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get(".snipcart-cart-header").should("be.visible")
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        Checkout.checkOutFlow('Rughey Gilzeane', 'gilzeane12@ya', 'Ivory Way', 'Mount Pleasant', 'Jamaica', 'St Andrew', '12345')
        cy.get('.snipcart-submit').click()
        cy.url().should('contain', 'checkout')
        cy.wait(6000)
        cy.get('.snipcart__font--subtitle').should('be.visible')

    })
    it('should not checkout with invalid card number', () => {
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get(".snipcart-cart-header").should("be.visible")
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        Checkout.checkOutFlow('Rughey Gilzeane', 'gilzeane12@yahoo.com', 'Ivory Way', 'Mount Pleasant', 'Jamaica', 'St Andrew', '12345')
        cy.iframe('.snipcart-payment-card-form iframe').find('#card-number').type('4242 4242 4242 4242')
        cy.iframe('.snipcart-payment-card-form iframe').find('#expiry-date').type('10/24')
        cy.iframe('.snipcart-payment-card-form iframe').find('#cvv').type(123)
        cy.get('.snipcart-submit').click()
        cy.url().should('contain', 'checkout')
        cy.wait(6000)
        cy.get('.snipcart__font--subtitle').should('be.visible')

    })


})




















