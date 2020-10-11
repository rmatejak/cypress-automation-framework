///<reference types="Cypress"/>

describe("Cypress web security", () => {

    it("Validate visiting two different domains", () => {
        cy.visit("http://webdriveruniversity.com/")
        //cy.visit("https://automationteststore.com/")

    })

    //There is a open issue about this problem
    it("Validate visiting two different domains via user actions", () => {
        cy.visit("http://webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click()

    })

})