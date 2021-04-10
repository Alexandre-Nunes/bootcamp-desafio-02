const faker = require('faker')

const el = require('./elements').ELEMENTS

class Artigo {

    acessarFormularioArtigo(){
         cy.get(el.LinkArtigo).click()
    }

    preencherArtigo() {
        cy.get(el.inputTitle).type('Meu primeiro artigo')
        cy.get(el.inputDescription).type('Mundo do QA')
        cy.get(el.textareaArtigo).type(faker.lorem.paragraph())
        cy.get(el.inputTag).type('#SomosTodosQas')

    }

    publicarArtigo() {
        cy.get(el.ButtonSubmeterArtigo).click()
    }

}

export default new Artigo()