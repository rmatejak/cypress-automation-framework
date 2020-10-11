class Contact_Us_PO {

    contactForm_Submission(firstName, lastName, email, comment, $selector, textToLocate) {
        cy.get('input[name="first_name"]').type(firstName)
        cy.get('input[name="last_name"]').type(lastName)
        cy.get('input[name="email"]').type(email)
        cy.get('textarea[name="message"]').type(comment)
        cy.get('input[value="SUBMIT"]').click()
        cy.get($selector).contains(textToLocate, {timeout: 5000})
        cy.screenshot()
        cy.screenshot("Made a contact us form submission")
    }
}
export default Contact_Us_PO