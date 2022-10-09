

/*Those test are failing because my lack of knowledge of using cookies to stay logged in, I really wanted to Edit my info and proceed to checkout and test that functionality

  */
describe('login.cy.js', () => {
    it('should open the main page', () => {
        cy.visit('http://automationpractice.com/index.php')
    })
});

/*describe('open the login page', () => {
    it('navigate to the login page ', () => {
      cy.get('.login').click()
    })
});
*/
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

     describe('navigate to My personal information page', () => {
       it ('opens Users info form', () =>{
        cy.get('#center_column > div > div:nth-child(1) > ul > li:nth-child(4) > a > span').click();
       })
     })

describe('User should be able to edit his first name', () =>{
    it('edit your first name', () => {
        cy.get('#firstname').should('contain', 'Faruk').type('Atlant');     
    })
})

describe('User should be able to edit his last name', () =>{
    it('edit your last name', () => {
        cy.get('#lastname').should('contain', 'Biberovic').type('Kjuejovic');     
    })
})

/*describe('User should be able to edit his email address', () =>{
    it('edit your email address', () => {
        cy.get('#email').should('contain', 'testio@gmail.com').type('testqatest@outlook.com');     
    })
})*/

describe('User should be able to Save his changes', () => {
    it('saves your edited information', () =>{
        cy.get('#Save').click()
    })
})
