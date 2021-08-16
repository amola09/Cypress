describe('Verify the login functionality', function () {

    it('test login with valid credentials', function () {
        cy.visit('https://app.recast.studio/auth/login/')
        cy.get('#login-form_email').type('amola.11@gmail.com')
        cy.get('#login-form_password').type('Amol@123')
        cy.get('#login-form > div:nth-child(5) > div > div > div > button').click()
        cy.wait(3000)

    })
    it('test login with invalid credentials', function () {

    })

})
