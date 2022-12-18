class productGallery{

    get imageOne(){
      return  (".chakra-image.css-2i84d9[src='/images/quality-hat.jpg']")
    }

    get homeButton() {
        return ('[id="top-home"]')
    }
    get productName() {
        return ('[class= "chakra-text css-1n64n71"]')
    }
    get productCategory() {
        return ('.css-1ccau2i')
    }
    get productList() {
        return ('.css-12qzrsi')
    }

    productPage(){
        cy.get(this.imageOne).click()

    }
}