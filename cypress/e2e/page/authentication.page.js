class Authentication {

    get signInOrRegisterButton() {
        return ('#signInOrRegister')
    }
    get signUpOption() {
        return ('.auth0-lock-tabs li:nth-child(2)')
    }
    get email() {
        return ('[type ="email"]')
    }
    get passWord() {
        return ('[type = "password"]')
    }
    get signUpButton() {
        return ('.auth0-label-submit')
    }
    get productList() {
        return ('.css-12qzrsi')
    }
    signUp(email, passWord) {
        cy.get(this.signInOrRegisterButton).click()
        cy.get(this.signUpOption).click()
        cy.get(this.email).type(email)
        cy.get(this.passWord).type(passWord)
        cy.get(this.signUpButton).click()
    }
    login(email, passWord) {
        cy.get(this.signInOrRegisterButton).click()
        cy.get(this.email).type(email)
        cy.get(this.passWord).type(passWord)
        cy.get(this.signUpButton).click()
    }
}
export default new Authentication()
















