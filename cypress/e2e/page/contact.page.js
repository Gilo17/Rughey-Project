class contact {

    get contact() {
        return ("#top-contact")
    }
    get firstName() {
        return ('#firstName')
    }
    get lastName() {
        return ('#lastName')
    }
    get email() {
        return ('#email')
    }
    get subject() {
        return ('#subject')
    }
    get message() {
        return ('#message')
    }
    get sendMessage() {
        return ("button[class='chakra-button css-vs0e4t']")
    }

Contact(firstName,lastName,email,subject,message){
    cy.get(this.contact).click()
    cy.get(this.firstName).type(firstName)
    cy.get(this.lastName).type(lastName)
    cy.get(this.email).type(email)
    cy.get(this.subject).type(subject)
    cy.get(this.message).type(message)
    cy.get(this.sendMessage).click()
}

}
export default new contact()
