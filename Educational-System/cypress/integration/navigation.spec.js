/// <reference types="Cypress" />

import Chance from 'chance';
const chance = new Chance();

it('Should visit frontpage', () => {
    cy.visit('http://127.0.0.1:4200')
    cy.get('.text').contains('Üdvözlünk az SZTE interaktív oktatási felületén!')
    cy.get('.button').contains('Kurzusok listázása').click()
    cy.contains('Bejelentkezés').click()
    cy.url().should('include', '/login')
    cy.contains('Regisztráció').click()
    cy.url().should('include', '/registration')
    cy.contains('Jelentkezz be!').click()
    cy.url().should('include', '/login')
    cy.contains('Regisztrálj!').click()
    cy.url().should('include', '/registration')
})