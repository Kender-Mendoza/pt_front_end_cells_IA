import WrapperModalLayout from '../WrapperModalLayout.vue'


describe('WrapperModalLayout', () => {
  it('renders the dialog with the correct title and button text', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
        buttonText: 'Accept'
      }
    })

    cy.get('.v-dialog').should('exist')
    cy.get('.text-h5').should('contain', 'Confirmation')
    cy.get('.v-btn').contains('Accept').should('exist')
  })

  it('closes the dialog when clicking the close button', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
        buttonText: 'Accept',
        'onUpdate:modelValue': cy.spy().as('updateModelValue')
      }
    })

    cy.get('.v-dialog').should('exist')

    cy.get('.v-btn[icon="mdi-close"]').click()

    cy.get('@updateModelValue').should('have.been.calledWith', false)
  })

  it('emits buttonEvent when clicking the action button', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
        buttonText: 'Accept',
        onButtonEvent: cy.spy().as('buttonEvent')
      }
    })

    cy.get('.v-btn').contains('Accept').click()
    cy.get('@buttonEvent').should('have.been.calledOnce')
  })

  it('closes the dialog when clicking the Cancel button', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
        buttonText: 'Accept',
        'onUpdate:modelValue': cy.spy().as('updateModelValue')
      }
    })

    cy.get('.v-btn').contains('Cancel').click()
    cy.get('@updateModelValue').should('have.been.calledWith', false)
  })
})