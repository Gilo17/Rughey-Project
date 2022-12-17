class addToCart {
    get qualityFittedHatItem() {
        return ('#product-0>#add-to-cart.chakra-button')
    }
    get qualityTruckerHat() {
        return ('#product-1>#add-to-cart.chakra-button')
    }
    get qualityMousePad() {
        return ('#product-2>#add-to-cart.chakra-button')
    }
    get cartItemName() {
        return ('.snipcart-item-line__title')
    }
    get cartButton() {
        return ('[type="button"]#top-cart')
    }
    get removeCartIcon() {
        return ('[title="Remove item"]')
    }
    get detailedCartButton() {
        return ('[class= "snipcart-button-link"]')
    }
    get increaseQuantityButton() {
        return ('[title= "Increment quantity"]')
    }
    get cartTotalFees() {
        return ('.snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large')
    }
    get itemPriceFee() {
        return ('.snipcart-item-quantity__total-price.snipcart__font--bold.snipcart__font--secondary')
    }
    get continueShoppingButton() {
        return ('[class="snipcart-modal__close-title snipcart__font--std"]')
    }
    get increaseValue() {
        return ('#product-0-increase')
    }
    get itemName() {
        return ('p[class= "chakra-text css-1n64n71"]')
    }
    get itemPrice() {
        return ('p[class= "chakra-text css-0"]')
    }
    get selectSortDropDown() {
        return ('#sort')
    }
    get selectFilterDropDown() {
        return ('#category')
    }
    get itemCategory() {
        return ('span[class= "css-1ccau2i"]')
    }
    get multipleCartItemName() {
        return ('.snipcart-item-line__title.snipcart__font--xlarge.snipcart__font--secondary.snipcart__font--black')
    }
    addCartItems() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.qualityFittedHatItem).should('be.visible').click()
        // cy.get(this.qualityFittedHatItem).click()
    }
    addMultipleCartItems() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.qualityFittedHatItem).should('be.visible').click()
        cy.get(this.continueShoppingButton).click()
        cy.get(this.qualityTruckerHat).should('be.visible').click()
        cy.get(this.continueShoppingButton).click()
        cy.get(this.qualityMousePad).should('be.visible').click({ force: true })
    }
    removeCartItem() {
        cy.wait(1500)
        cy.get(this.removeCartIcon).should('be.visible').click()
    }
    increaseCartItem() {
        cy.get(this.qualityFittedHatItem).scrollIntoView()
        cy.wait(1500)
        cy.get(this.increaseValue).click(2)
        cy.get(this.qualityFittedHatItem).click()
    }
    selectSort(sort) {
        cy.get(this.selectSortDropDown).select(sort)
    }
    selectFilter(sort) {
        cy.get(this.selectFilterDropDown).select(sort)
    }
}
export default new addToCart()