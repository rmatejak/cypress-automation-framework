///<reference types="Cypress"/>

describe("Verifying variables, cypress comand and JQuesry commands.",() => {

    it("Navigating to specific product pages.", () => {

        cy.visit("https://automationteststore.com/")

        //The following will fail
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click()
        // skincareLink.click()

        //The following will pass
        // cy.visit("https://automationteststore.com/")
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        //  skincareLink.click()

        cy.get("a[href*='product/category&path=']").contains("Makeup").click()
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
    })

    it("Navigating to specific product pages.", () => {

        cy.visit("https://automationteststore.com/")

        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        //Following code will fail
        // const header = cy.get('.maintext')
        // cy.log(header.text())

        cy.get('.maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header text: " + headerText)
            expect(headerText).to.eq('Makeup')
        })
    })

    it.only("Validate properties of the Contact Us Page.", () => {

        cy.visit("https://automationteststore.com/index.php?rt=content/contact")

        //Uses cypress command and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embedded command (Closure)
            cy.get('#field_11').then(fnText => {
                cy.log(fnText.text())
            })

        })

        

    })
}) 