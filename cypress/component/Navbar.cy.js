import { Navbar } from "../../src/Components/Navbar";
import { Paragraph } from "../../src/Components/Paragraph";

const testNav = <Navbar bg="primary"><Paragraph size="lg">Test App</Paragraph><Paragraph size="sm">Login</Paragraph></Navbar>;

describe('Navbar.cy.js', () => {
  it('render navbar', () => {
    cy.mount(testNav)
    cy.get('nav').should('be.visible')
  })

  it('renders nav text', () => {
    cy.mount(testNav)
    cy.get('p:first-child').contains( /Test App/)
    cy.get('p:nth-child(2)').contains( /Login/)
  })

  it('nav text styled', () => {
    cy.mount(testNav)
    cy.get('p:first-child').should('have.css', 'font-size', '35.2px')
    cy.get('p:first-child').should('have.css', 'font-weight', '600')
    cy.get('p:nth-child(2)').should('have.css', 'font-size', '16px')
    cy.get('p:nth-child(2)').should('have.css', 'font-weight', '400')
  })
})