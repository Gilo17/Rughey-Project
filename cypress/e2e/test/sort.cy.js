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
        cy.wait(1000)
        ProductsData.products.sort(function(a, b) {
			if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
		  })

        cy.get(addToCart.itemName).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].name)
        })
        
    })
    it('should sort products from High to Low', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        addToCart.selectSort(ProductsData.sort['High to Low'])
        cy.wait(1000)
        ProductsData.products.sort(function(a, b) {
			return b.price - a.price;
		  })

        cy.get(addToCart.itemPrice).each(($elem, index) => {
            expect(parseInt($elem.text().replace('$',''))).equal(ProductsData.products[index].price)
        })
    })
    it('should filter products by hat category', () => {
        Authentication.login('gilzene@yahoo.com', 'Liverpool123')
        addToCart.selectFilter(ProductsData.sort['Hats'])
        cy.wait(1500)
        ProductsData.products.sort()
        cy.get(addToCart.itemCategory).each(($elem, index) => {
            expect($elem.text()).equal(ProductsData.products[index].label)
        })
    })
})