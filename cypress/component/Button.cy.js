import { Button } from '../../src/Components/Button';

const handleClick = () => {
  alert('Click happened');
};

const testButton = <Button size="lg" bg="primary" onClick={handleClick}>Submit</Button>

describe('Button.cy.js', () => {
  it('render button', () => {
    cy.mount(testButton)
    cy.get('button').should('be.visible')
  })

  it('render button text', () => {
    cy.mount(testButton)
    cy.get('button').contains(/Submit/)
  })

  it('button is styled', () => {
    cy.mount(testButton)
    cy.get('button').should('have.css', 'background-color', 'rgb(33, 150, 243)')
    cy.get('button').should('have.css', 'font-size', '15px')
  })

  it('See alert when button is clicked', () => {
    cy.mount(testButton)
    cy.get('button').contains(/Submit/).click()
    cy.on('window:alert', (t) => {
      expect(t).to.contains('Click happened')
    })
  })
})