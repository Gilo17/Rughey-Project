class Checkout {

    get Checkoutbtn (){
      return ("button[class='snipcart-button-primary snipcart-base-button is-icon-right']")  
    }

    get fullName () {
        return ("#name_72f5ece5-bf87-4b76-a5ac-ceed54acda1e")     
    }

    get email () {
        return ('#email_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get streetAdress () {
        return ('#address1_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get city () {
        return ('#city_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get country () {
        return ('#country_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get state () {
        return ('#province_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get zip () {
        return ('#postalCode_72f5ece5-bf87-4b76-a5ac-ceed54acda1e')
    }

    get continueBtn () {
        return ('.snipcart-base-button__wrapper')
    }

    checkOut(fullName,email,streetAdress,city,country,state,zip){
        cy.get(this.Checkoutbtn).click()
        cy.get(this.fullName).type(fullName)
        cy.get(this.email).type(email)
        cy.get(this.streetAdress).type(streetAdress)
        cy.get(this.city).type(city)
        cy.get(this.country).type(country)
        cy.get(this.state).type(state)
        cy.get(this.zip).type(zip)
        cy.get(this.continueBtn).click()

    }  
     
}
export default new Checkout()

