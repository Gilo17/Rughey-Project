import Authentication from "../page/authentication.page"
import ProductsData from '../data/ProductsData.data'
import addToCart from '../page/addToCart.page'
describe('Sorting items names and prices', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should sort products from A-Z', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        addToCart.selectSort(ProductsData.sort['A to Z'])
        ProductsData.products.sort()
        
    })
    it('should sort products from High to Low', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        addToCart.selectSort(ProductsData.sort['High to Low'])
        ProductsData.products.sort()
        cy.get(addToCart.itemPrice).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].price)
        })
    })
    it('should filter products by hat category', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        addToCart.selectFilter(ProductsData.sort['Hats'])
        ProductsData.products.sort()
        cy.get(addToCart.itemCategory).each(($elem, index) => {
            expect($elem.text('hat')).equal(ProductsData.products[index].label)
        })
    })
})