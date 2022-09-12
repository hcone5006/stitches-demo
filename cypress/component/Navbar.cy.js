import { Navbar } from "../../src/Components/Navbar.jsx";

describe('Navbar.cy.js', () => {
  it('render navbar', () => {
    cy.mount(<Navbar bg="primary"><p>Test App</p></Navbar>)
    cy.get('p').contains( 'Test App')
    // cy.get('nav').contains('have.class', 'bg-primary')
  })
})