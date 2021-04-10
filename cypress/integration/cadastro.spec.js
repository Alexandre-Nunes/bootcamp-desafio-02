/// <reference types="cypress" />

import cadastro from "../support/pages/cadastro"

const faker = require('faker')
describe('Cadastro', () => {
    it('Cadastro de um novo usuário', () => {
        cy.visit('/register')

        cy.intercept('POST', '**/api/users**', {
        }).as('postUser')

        
        cadastro.preencherCadastro()
        cadastro.submeterCadastro()

           
        cy.wait('@postUser').then((resUser) => {
            expect(resUser.response.statusCode).to.eq(200)
        })

        cy.url().should('contain', 'register')
        cy.contains('Have an account?').should('contain', 'Have an account?')

    });
});