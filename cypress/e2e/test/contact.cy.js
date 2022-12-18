import contact from "../page/contact.page"
import Authentication from "../page/authentication.page"

describe('Contact', () => {
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
    it('should send a message',()=>{
        contact.Contact('Rughey','Gilzeane','gilzene@yahoo.com','clothing items','i would love for you to view these items')
       cy.url().should('contain','contact')
    })

    it('should not send message with invalid email',()=>{
        contact.Contact('Rughey','Gilzeane','gilzene@ya','clothing items','i would love for you to view these items')
        cy.url().should('contain','contact')
        cy.get("chakra-form__error-message css-170ki1a").should('contain.text','Email is invalid')
    })
    it('should not send message with numbers as name',()=>{
        contact.Contact('Rughey','123456','gilzene@yahoo.com','clothing items','i would love for you to view these items')
        cy.url().should('contain','contact')
    })
})