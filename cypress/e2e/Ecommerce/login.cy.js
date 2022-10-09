


describe('login.cy.js', () => {
    it('should open the main page', () => {
        cy.visit('http://automationpractice.com/index.php')
    })
});

describe('open the login page', () => {
    it('navigate to the login page ', () => {
      cy.get('.login').click()
    })
});

 //Insert a valid email address

 describe('User enters a valid email address', () => {
    it('use a valid email', () =>{
        cy.get('#email').should("be.visible")
        cy.get('#email').type("testio@gmail.com")
//cy.get('$data-validate').should("be.visible")
         })
})

 //Insert a valid password

 describe('User enters a valid password', () => {
    it('use a valid password', () =>{
       cy.get('#passwd').type("atlant")
         })
});

//Submit LogIn

describe('User submits login', () => {
    it('clicks on submit button', ()=> {
        cy.get('#SubmitLogin').contains("Sign in").click()
    })
});






