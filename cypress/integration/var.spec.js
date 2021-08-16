describe(('variables in the cypress'),()=>{

    it('firstwat',()=>{


         cy.visit('https://automationteststore.com/index.php?rt=account/login')
        const logIn = cy.get('#loginFrm_loginname')
        logIn.type('amol@gmail.com')
        const passWord = cy.get('#loginFrm_password')
        passWord.type('abcdef')
    })



})