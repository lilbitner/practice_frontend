// describe('App E2E', () => {
//   it('should assert that true is equal to true', () => {
//     expect(true).to.equal(false);
//   });
// });

describe('App E2E', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000')
  })
  it('should have a header', () => {
    cy.get('h3')
      .should('have.text', 'Next World Investments');
  });
  it('should have a button', () => {
    cy.get('button')
      .should('have.text', 'Add Account');
  });
  it('should have a title', () => {
    cy.get('h2')
      .should('have.text', 'Account Summary');
  });
  it('should have a 14 h4 elements', () => {
    cy.get('h4')
      .should('have.length', 14);
  });
  it('should have font size 18', () => {
     cy.get('h3')
      .should('have.css', 'font-size', '18px');
  });
  it('should have gray color', () => {
    cy.get('button')
      .should('have.css', 'color', 'rgb(255, 255, 255)')
  })
  it('should have same font family', () => {
    cy.get('h5')
      .should('have.css', 'font-family', '"Helvetica Neue"')
  })

  //long process to define what to test in e2e 
  //css, font size, how detailed 

});