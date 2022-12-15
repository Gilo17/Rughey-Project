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
                cy.get('[type="email"]').type("test1@tester.com");
                cy.get('[type="password"]').type("Password1", { log: false });
                cy.get("[name=submit]").click();
            }
        );
        cy.url().should('contain', 'products')
        cy.get(Authentication.productList).should('be.visible')
    })
   addToCart
    it.skip('add single item to cart',()=>{
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
    })
    it.skip('remove single item from cart', ()=>{
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        cy.get("button[title='Decrement quantity']").click();
        cy.url().should('contain','cart') 
        cy.get('.snipcart-empty-cart__title.snipcart__font--secondary.snipcart__font--xlarge.snipcart__font--bold').should('be.visible')
    })
    it('should add multiple items to cart',()=>{
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get('button[data-item-name="Quality Trucker Hat"]').scrollIntoView()
        cy.get('button[data-item-name="Quality Trucker Hat"]').should('be.visible').click()
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
        cy.get("button[title='Decrement quantity']").click(); 

    it('add single item to cart', () => {
        cy.get('button[data-item-name="Quality Fitted Hat"]').scrollIntoView()
        cy.wait(6000)
        cy.get('button[data-item-name="Quality Fitted Hat"]').should('be.visible').click()
        cy.get(".snipcart-cart-header").should("be.visible")
        cy.get('.snipcart-base-button__wrapper').should("be.visible")
    })


})

