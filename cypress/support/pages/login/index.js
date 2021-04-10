const el = require('./elements').ELEMENTS

class Login {
preencherDadosLogin(){
    cy.get(el.inputEmailLogin).type(Cypress.config().user.email)
    cy.get(el.inputSenhaLogin).type(Cypress.config().user.password)
}

submeterLogin(){
    cy.get(el.buttonSubmeterLogin).click()
}

}

export default new Login()