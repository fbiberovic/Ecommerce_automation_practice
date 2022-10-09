
describe("Using the search bar", () => {
    before(() => {
        cy.visit("http://automationpractice.com/index.php")
    })

    it('perform searching', () => {
        cy.get('input.search_query').type('shirt')

        cy.get('button.button-search').click();

        cy.get('a.product-name').should('contain', 'Faded Short Sleeve')
    })
});

//adding product to wishlist

describe("Check  the product", () => {
    it("View more details of the item", () => {
        cy.get('ul.product_list > li').click()
        cy.contains('More').click()
    })

    it('Check for product details and price', () => {
        cy.contains('Faded Short Sleeve')
        cy.contains('Model')
        cy.contains('demo_1')
        cy.contains('Condition')
        cy.contains('New')
        cy.contains("Faded short sleeve t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!")
        cy.contains('$16.51')
    })

    it("Add item to wishlist", () => {
        cy.contains('Add to wishlist').click()
    })
})
