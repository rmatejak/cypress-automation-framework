///<reference types="Cypress"/>

describe("Verifying chechboxes via webdriveruni", function() {

    beforeEach(() => {
        cy.log(Cypress.env("name"))
        cy.navigateTo_WebdriverUni_Checkbox_Page()
    })

    it("Check and validate checkbox", () => {
        //cy.get('#checkboxes > :nth-child(1) > input').check()
        //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check()
        cy.get('@option-1').check().should('be.checked')
    })

    it("Check and validate checkbox", () => {
        cy.get(':nth-child(5) > input').uncheck().should('not.be.checked')
    })

    it("Check multiple checkboxes", () => {
        cy.get('input[type="checkbox"]').check(['option-1', 'option-2', 'option-3', 'option-4']).should('be.checked')
    })
})