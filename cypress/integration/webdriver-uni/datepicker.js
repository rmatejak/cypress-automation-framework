///<reference types="Cypress"/>

describe("Test Datepicker via webdriveruni", () => {

    it("Select date from the datepicker", () => {

        cy.visit("http://webdriveruniversity.com/")
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        cy.get('#datepicker').click()

        // let date = new Date()
        // date.setDate(date.getDate())
        // cy.log(date.getDate()) //Get current date

        // let date2 = new Date()
        // date2.setDate(date2.getDate() + 5)
        // cy.log(date2.getDate()) //Get current date + 5 days

        var date = new Date()
        date.setDate(date.getDate() + 15)

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("en-CA", {month: "long"})
        var futureDay = date.getDate()

        cy.log("Future year to select: " + futureYear)
        cy.log("Future month to select: " + futureMonth)
        cy.log("Future day to select: " + futureDay)

        function selectMonthAndyear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                if(!currentDate.text().includes(futureYear)) {
                    cy.get('.next').first().click()
                    selectMonthAndyear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate => {
                    if(!currentDate.text().includes(futureMonth)) {
                        cy.get('.next').first().click()
                        selectMonthAndyear()
                    }
                }) 
            })
        }

        function selectFutureDay() {
            cy.get('td[class="day"]').contains(futureDay).click()
        }
        selectMonthAndyear()
        selectFutureDay()

    })
})