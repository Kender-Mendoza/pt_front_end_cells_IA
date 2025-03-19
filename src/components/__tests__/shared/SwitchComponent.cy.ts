import SwitchComponent from '@/components/shared/SwitchComponent.vue'

describe('SwitchComponent', () => {
  it('renders the switch with the correct label', () => {
    cy.mount(SwitchComponent, {
      props: {
        name: 'toggle',
        label: 'Enable feature'
      }
    })

    cy.get('input[name="toggle"]').should('exist')
    cy.get('.v-label').should('contain', 'Enable feature')
  })

  it('toggles the switch on and off', () => {
    cy.mount(SwitchComponent, {
      props: {
        name: 'toggle',
        label: 'Enable feature'
      }
    })

    // Verificar que está apagado por defecto
    cy.get('input[type="checkbox"]').should('not.be.checked')

    // Activar el switch
    cy.get('input[name="toggle"]').click()
    cy.get('input[type="checkbox"]').should('be.checked')

    // Desactivar el switch
    cy.get('.v-switch').click()
    cy.get('input[type="checkbox"]').should('not.be.checked')
  })
})