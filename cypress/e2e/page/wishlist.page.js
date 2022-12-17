


class Wishlist{

get fittedHat(){
    return(".chakra-image.css-2i84d9[src='/images/quality-hat-model.jpg']")
}
    get starIcon1(){
        return('#add-to-favorite')
    }

    get tuckerHat(){
        (".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']")
    }
get favoritesBtn(){
    return("button[id='top-favorite']")
}
get productPage(){
    return('.chakra-heading.css-18j379d')
}
get removeBtn(){
    return('#remove-favorite-btn')
}
get addToCart(){
    return('#add-to-cart')
}
get signOut(){
    return ('#top-sign-out')
}
get prodStar(){
    return("div[id='product-0'] div[class='css-1m8iww1']")
}
get cartBtn(){
    return('#top-cart')
}
singleFavorite(){
    cy.get(this.fittedHat).click()
    cy.get(this.starIcon1).click()
    cy.get(this.favoritesBtn).click()
}
productsFav(){
    cy.get(this.prodStar).click()
    cy.get(this.favoritesBtn).click()
}
singleFavoriteRem(){
    cy.get(this.fittedHat).click()
    cy.get(this.starIcon1).click()
    cy.get(this.favoritesBtn).click()
    cy.get(this.removeBtn).click()
}
addItem(){
    cy.get(this.fittedHat).click()
    cy.get(this.starIcon1).click()
    cy.get(this.favoritesBtn).click()
    cy.get(this.addToCart).click()
    cy.get(this.cartBtn).click()
}
signout(){
    cy.get(this.fittedHat).click()
    cy.get(this.starIcon1).click()
    cy.get(this.favoritesBtn).click()
    cy.get(this.signOut).click()
}
}

export default new Wishlist()