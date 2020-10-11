///<reference types="Cypress"/>

describe("Validate webdriveruni home page links", () => {

    it("Confirm links redirect to te correct pages", () => {
        cy.visit("http://webdriveruniversity.com/")

    cy.get('#contact-us').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'contactus')

    cy.go('back')
    cy.reload()
    cy.url().should('include', 'http://webdriveruniversity.com/')
    //cy.reload(true) //reload without using cache

    cy.go('forward')
    cy.url().should('include', 'contactus')

    cy.go('back')
    cy.get('#login-portal').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'Login-Portal')
    cy.go('back')

    cy.get('#to-do-list').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'To-Do-List')
    cy.go('back')

    
    })
})