
//Search bar test


describe("Using the search bar", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    })

    it('perform searching', () => {
        cy.get('input.search_query').type('skirt')

        cy.get('button.button-search').click();

        cy.get('a.product-name').should('contain', 'Printed Dress')
    })
});

//Buying the product test

describe("Buy the product", () => {
    it("View more details of the item", () => {
        cy.get('ul.product_list > li').click()
        cy.contains('More').click()
    })

    it('Check for product details and price', () => {
        cy.contains('Printed Dress')
        cy.contains('Model')
        cy.contains('demo_3')
        cy.contains('Condition')
        cy.contains('New')
        cy.contains("100% cotton double printed dress. Black and white striped top and orange high waisted skater skirt bottom.")
        cy.contains('$26.00')
    })

    it('Changes the quantity', () => {
        cy.contains('Quantity');
        cy.get('a.button-plus').click();
        cy.get('#quantity_wanted').should('have.value', '2');
    })

    it("Add item to cart", () => {
        cy.get('#add_to_cart > button > span').click()
    })

    it('The shopping cart has been updated', () => {
        cy.get('.ajax_cart_no_product')
      })

    })


// Add item to cart test fails because my cart is still empty after clicking on the button and checking the shopping cart again.