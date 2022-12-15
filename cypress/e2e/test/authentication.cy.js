import Authentication from "../page/authentication.page"
import { faker } from '@faker-js/faker'

describe('User authentication', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Login to platform", () => {
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
    });
    it('signUp', () => {
        cy.get("#signInOrRegister").click();
        const email = faker.internet.email();
        //Login on to site.
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: { email } },
            ({ email }) => {
                cy.get('.auth0-lock-tabs li:nth-child(2)').click()
                cy.get('[type="email"]').type(email);
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
    it("should not login to platform with invalid password", () => {
        cy.get("#signInOrRegister").click();
        //Login on to site.
        cy.origin(
            "https://dev-mlluudmotpwoldtv.us.auth0.com",
            { args: {} },
            ({ }) => {
                cy.get('[type="email"]').type("gilzene@yahoo.com");
                cy.get('[type="password"]').type("Liverpool", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        // cy.url().should('contain', 'auth')
        cy.get(".auth0-global-message auth0-global-message-error").should('be.visible')
    })
})

