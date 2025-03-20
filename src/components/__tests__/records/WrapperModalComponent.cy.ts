import WrapperModalComponent from "@/components/records/WrapperModalComponent.vue"

//? Skipping due to a configuration bug with I18n.
describe.skip('WrapperModalComponent', () => {
  it('renders the dialog with the correct title and button text', () => {
    cy.mount(WrapperModalComponent, {
      props: {
        modelValue: true,
        title: 'Confirmation',
      },
    })

    cy.get('.v-dialog').should('exist')
    cy.get('.text-h5').should('contain', 'Confirmation')
  })

  it('closes the dialog when clicking the close button', () => {
    cy.mount(WrapperModalComponent, {
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
