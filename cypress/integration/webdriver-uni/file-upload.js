///<reference types="Cypress"/>


describe("Test file upload via webdriveruni", function() {

    it("Upload a file...", () => {

        cy.visit("http://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click()

        cy.fixture("200iq-png.png", "base64").then(fileContent => {

            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "200iq-png.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })
        cy.get('#submit-button').click()
    })

    it("Upload no file", () => {

        cy.visit("http://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click()

        cy.get('#submit-button').click()
    })
})