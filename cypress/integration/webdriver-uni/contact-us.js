import Homepage_PO from '../../support/pageObjects/webdriver-uni/Homepage_PO'
import Contact_Us_PO from '../../support/pageObjects/webdriver-uni/Contact_Us_PO'
///<reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUniversity.com", function () {
    // Cypress.config('defaultCommandTimeout', 20000)
    const homepage_PO = new Homepage_PO()
    const contact_Us_PO = new Contact_Us_PO()

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data
        })

        homepage_PO.visitHomepage()
        cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button()
        //cy.pause()
    })

    it("Should be able to submit a successful subbmission via contact us form", function () {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.document().should('have.property', 'charset', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')

        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), this.data.last_name, this.data.email, "Lecimy nie śpimy", 'h1', 'Thank You for your Message!')
    })

    it("Should not be able to submit a successful subbmission via contact us form as all fields are required", function () {
        if (Cypress.isBrowser('firefox')) {

        } else {
            contact_Us_PO.contactForm_Submission(this.data.first_name, this.data.last_name, " ", "Lecimy nie śpimy", 'body', 'Error: Invalid email address')
        }
    })
})