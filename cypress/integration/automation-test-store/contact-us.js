///<reference types="Cypress"/>

describe("Test Contact Us form via https://automationteststore.com/", function () {

    beforeEach(function () {
        //cy.viewport(550, 750)
        cy.fixture("userDetails").as("user")
    })

    it("Should be able to submit a successful subbmission via contact us form", {
        retries: {
            runMode: 4,
            openMode: 4
        }
    }, function () {

        cy.visit("https://automationteststore.com/")
        cy.get('a[href$="contact222"]').click().then(function (tabNameText) {
            cy.log("Tab name is: " + tabNameText.text())
        })
        //cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })

        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type("Jazda, jazda biała gwiazda")
        cy.get('button[title="Submit"]').click()
        cy.contains('Your enquiry has been successfully sent to the store owner!').should('have.text', 'Your enquiry has been successfully sent to the store owner!')

        cy.log("Test has completed!")

    })

})