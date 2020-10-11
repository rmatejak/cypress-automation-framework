describe('Hooks', () => {
    before(() => {
        cy.log("Runs once before all tests in the block")
    })

    beforeEach(() => {
        cy.log("Runs before each test in the block")
    })

    afterEach(() => {
        cy.log("Runs after each test in the block")
    })

    after(() => {
        cy.log("Runs once after all tests in the block")
    })

    it("Example test1", () => {
        cy.log("Example test1")
    })

    it("Example test2", () => {
        cy.log("Example test2")
    })
})