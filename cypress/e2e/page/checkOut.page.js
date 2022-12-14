class Checkout {

    get Checkoutbtn() {
        return ("button[class='snipcart-button-primary snipcart-base-button is-icon-right']")
    }

    get fullName() {
        return ("[name='name']")
    }

    get email() {
        return ("[name='email']")
    }

    get streetAdress() {
        return ("[name='address1']")
    }

    get city() {
        return ("[name='city']")
    }

    get country() {
        return ('.snipcart-typeahead input')
    }

    get state() {
        return ("[name='province']")
    }

    get zip() {
        return ("[name='postalCode']")
    }

    get continueBtn() {
        return ('.snipcart-base-button__wrapper')
    }

    get cardNumber() {
        return ("#card-number")
    }
    get cardDate() {
        return ("[name ='expiry-date']")
    }
    get cvvNumber() {
        return ('#cvv')
    }
    get placeOrderButton() {
        return ("[type='submit']")
    }

    checkOutFlow(fullName, email, streetAdress, city, country, state, zip) {
        cy.get(this.Checkoutbtn).click()
        cy.get(this.fullName).type(fullName)
        cy.get(this.email).type(email)
        cy.get(this.streetAdress).type(streetAdress)
        cy.get(this.city).type(city)
        cy.get(this.country).eq(0).type('United States{enter}',{force: true} )
        cy.get(this.country).eq(1).type('Alabama',{force: true})
        cy.get(this.state).type(state)
        cy.get(this.zip).type(zip)
        cy.get(this.continueBtn).scrollIntoView()
        cy.get(this.continueBtn).click({ force: true })
        


        
    }

    paymentInfo(cardNumber, date, cvv) {
        cy.get(this.cardNumber).type(cardNumber)
        cy.get(this.cardDate).type(date)
        cy.get(this.cvvNumber).type(cvv)
        cy.get(this.placeOrderButton).click()
    }

}
export default new Checkout()

