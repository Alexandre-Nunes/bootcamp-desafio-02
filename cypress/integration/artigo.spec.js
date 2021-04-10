/// <reference types="cypress" />

import artigo from '../support/pages/artigo'

describe('Artigo', () => {

    beforeEach(() => {
        cy.login()

        cy.intercept('POST', '**/api/articles**', {
        }).as('postArticles')

        artigo.acessarFormularioArtigo()
    })
    it('Escrever um novo artigo', () => {
        artigo.preencherArtigo()
        artigo.publicarArtigo()

           
        cy.wait('@postArticles').then((resArticles) => {
            expect(resArticles.response.statusCode).to.eq(200)
        })

        cy.url().should('contain', 'editor')
        //cy.contains('Meu primeiro artigo').should('be.visible')
    })
})