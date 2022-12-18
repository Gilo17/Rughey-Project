
import Authentication from "../page/authentication.page"
import wishlist from "../page/wishlist.page"


describe('Favorites', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it.skip('add single favorite item', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        wishlist.singleFavorite()
        cy.url().should('contain','favorites')
    })
    
    it('add favorite from products page', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        wishlist.productsFav()
        cy.url().should('contain','favorites')

    })
    it('remove single favorite item', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        wishlist.singleFavoriteRem()   
        cy.get("div[class='chakra-stack css-owjkmg'] ").should('be.visible') 
    })
    it('checkout from favorites', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        wishlist.addItem()
        cy.get('.snipcart-cart-header__title.snipcart__font--black').should('be.visible')
    })
    it('sign out from favorites page', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        wishlist.signout() 
        cy.get('#login-text').should('be.visible') 

    })
})
