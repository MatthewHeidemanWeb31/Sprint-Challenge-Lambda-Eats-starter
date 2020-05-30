import cy from 'cypress';

describe('Form Test', function () {

    it('Test user onboard', function() {
  
    cy.visit("http://10.48.0.35/pizza");

    cy.get('input[name="name"]').text();
    
})})