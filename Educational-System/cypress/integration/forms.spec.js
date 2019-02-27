/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

it('Should fill registration form', () => {
    const email = chance.email();
    const name = chance.name();
    const qualification = chance.string();
    const goodPass = 'ASdw23q'

    cy.visit('http://127.0.0.1:4200/registration')
    cy.get('input[name="fullname"]').type(name).should('have.value', name)
    cy.get('input[name="qualification"]').type(qualification).should('have.value', qualification)
    cy.get('input[name="email"').type(email).should('have.value', email)
    cy.get('input[name="password"]').type(goodPass).should('have.value', goodPass)
    cy.get('input[name="password_again"]').type(goodPass).should('have.value', goodPass)
    cy.contains('Regisztrálok').click()
    cy.wait(100)
    cy.get('input[name="email"').clear().type(email).should('have.value', email)
    cy.get('input[name="password"]').clear().type(goodPass).should('have.value', goodPass)
    cy.get('.card-button').click()
    cy.wait(100)
    cy.get('#loggedinUser').should('not.be.empty')
    cy.get('#loggedinUser').contains(name)
    cy.wait(500)
    cy.get('#loggedinUser').click()
    cy.wait(200)
    cy.get('.dropdown-content').should('be.visible')
    cy.contains('Kijelentkezés').click()
    cy.get('#loggedinUser').should('not.be.visible')
    cy.url().should('include', '/login')

})