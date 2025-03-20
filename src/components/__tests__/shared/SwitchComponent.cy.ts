import SwitchComponent from '@/components/shared/SwitchComponent.vue'

describe('SwitchComponent', () => {
  it('renders the switch with the correct label', () => {
    cy.mount(SwitchComponent, {
      props: {
        name: 'toggle',
        label: 'Enable feature',
      },
    })

    cy.get('input[aria-label="Enable feature"]').should('exist')
    cy.get('.v-label').should('contain', 'Enable feature')
  })

  it('toggles the switch on and off', () => {
    cy.mount(SwitchComponent, {
      props: {
        name: 'toggle',
        label: 'Enable feature',
      },
    })

    cy.get('input[aria-label="Enable feature"]').should('not.be.checked')

    cy.get('input[aria-label="Enable feature"]').click()
    cy.get('input[aria-label="Enable feature"]').should('be.checked')

    cy.get('input[aria-label="Enable feature"]').click()
    cy.get('input[aria-label="Enable feature"]').should('not.be.checked')
  })

  it('toggles the switch on and off', () => {
    cy.mount(SwitchComponent, {
      props: {
        name: 'toggle',
        label: 'Enable feature',
        onChecked: cy.spy().as('tests'),
      },
    })

    cy.get('input[aria-label="Enable feature"]').click()
    cy.get('@tests').should('have.been.called')
  })
})
