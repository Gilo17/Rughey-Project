import Authentication from "../page/authentication.page"

describe("Add to cart",()=>{
    beforeEach(()=>{
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
    it('add single item to cart',()=>{
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(5000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get("section.snipcart-cart__content").should("be.visible")
    })


})

