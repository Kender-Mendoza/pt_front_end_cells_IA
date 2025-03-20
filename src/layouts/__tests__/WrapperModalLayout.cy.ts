import WrapperModalLayout from '../WrapperModalLayout.vue'


describe('WrapperModalLayout', () => {
  it('renders the dialog with the correct title and button text', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
      },
    })

    cy.get('.v-dialog').should('exist')
    cy.get('.text-h5').should('contain', 'Confirmation')
  })

  it('Render the slot', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
      },
      slots: {
        default: () => 'Hello there!',
      },
    })

    cy.get('div.px-6').contains('Hello there!')
  })

  it('closes the dialog when clicking the close button', () => {
    cy.mount(WrapperModalLayout, {
      props: {
        modelValue: true,
        title: 'Confirmation',
        'onUpdate:modelValue': cy.spy().as('updateModelValue'),
      },
    })

    cy.get('button').click()
    cy.get('@updateModelValue').should('have.been.calledWith', false)
  })
})
