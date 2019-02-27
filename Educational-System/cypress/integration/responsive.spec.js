


it('Should collapse cards on mobile', () => {
    cy.viewport('iphone-6')
    cy.visit('http://127.0.0.1:4200/kurzusok')
    cy.get('.burger').should('be.visible')
    cy.get('.card').each( ($el, index, $list) => {
        console.log(index)
        cy.wrap($el).scrollIntoView({ easing: 'linear', duration: 1000 })
        cy.wrap($el).should('be.visible');
    })
})


it('Should collapse cards on tablet', () => {
    cy.viewport('ipad-2')
    cy.visit('http://127.0.0.1:4200/kurzusok')
    cy.get('.burger').should('not.be.visible')
    cy.get('.card').each( ($el, index, $list) => {
        if(index <= 3) {
            cy.wrap($el).should('be.visible')
        }
        else {
            cy.wrap($el).scrollIntoView({ easing: 'linear', duration: 1000 })
            cy.wrap($el).should('be.visible')
        }
    })

})

it('Should diaplay all cards on desktop', () => {
    cy.viewport(1840, 1000)
    cy.visit('http://127.0.0.1:4200/kurzusok')
    cy.get('.card').each(($el, index, $list) => {
        cy.wrap($el).should('be.visible')
    })
})