///<reference types="Cypress"/>

describe("Handle js alerts", () => {

    it("Confirm js alerts contains the correct text", () => {
        cy.visit("http://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button1').click()

        //window:alert zawsze klika ok
        cy.on('window:alert', ($str) => {
            expect($str).to.eq('I am an alert box!')
        })
    })

    it("Validate javascript confirm alert box works correctly when clicking ok", () => {
        cy.visit("http://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', ($str) => {

            //Klika OK
            return true
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it("Validate javascript confirm alert box works correctly when clicking cancel", () => {
        cy.visit("http://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        cy.get('#button4').click()

        cy.on('window:confirm', ($str) => {

            //klika anuluj
            return false
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it.only("Validate javascript confirm alert box using a stub", () => {
        cy.visit("http://webdriveruniversity.com/")

        cy.get('#popup-alerts').invoke('removeAttr', 'target').click()
        
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        
        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
    })
})