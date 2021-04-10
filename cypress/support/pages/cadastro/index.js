const faker = require('faker')

const el = require('./elements').ELEMENTS

class Cadastro {

    preencherCadastro() {
        cy.get(el.inputNome).type(faker.name.findName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputSenha).type('Teste@123')
    }

    submeterCadastro() {
        cy.get(el.ButtonSubmeterCadastro).click()
    }
}

export default new Cadastro()