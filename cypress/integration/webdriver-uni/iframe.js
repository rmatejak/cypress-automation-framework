///<reference types="Cypress"/>

describe("Handling IFrame and Modals", () => {

    it("Handle webdriveruni IFrame and Modals", () => {

        cy.visit("http://webdriveruniversity.com/")
        cy.get('#iframe').invoke('removeAttr', 'target').click()

        cy.get('#frame').then($iframe => {
            const body = $iframe.contents().find('body')
            cy.wrap(body).as('iframe')
        })

        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('#myModal').as('modal')

        cy.get('@modal').should(($expectedTest) => {
            const text = $expectedTest.text()
            expect(text).to.include('Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles, cameras...')
        })

        cy.get('@modal').contains('Close').click()
    })



})