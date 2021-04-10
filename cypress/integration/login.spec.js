/// <reference types="cypress" />

import login from "../support/pages/login"
describe('Login', { browser: '!firefox' }, () => {
    it('Realizar login com sucesso', () => {
        cy.visit('/login')

        cy.intercept('POST', '**/api/users/login**', {
        }).as('postLogin')

        login.preencherDadosLogin()
        login.submeterLogin()
                 
        cy.wait('@postLogin').then((resLogin) => {
            expect(resLogin.response.statusCode).to.eq(200)
        })

        cy.url().should('contain', 'login')
        //cy.contains('No articles are here... yet.').should('be.visible')
    });
});