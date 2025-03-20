import InputDateComponent from '@/components/shared/InputDateComponent.vue'

describe('InputDateComponent', () => {
  it('renders the date input with correct props', () => {
    cy.mount(InputDateComponent, {
      props: {
        name: 'date',
        label: 'Select a date',
      },
    })

    cy.get('input[placeholder="mm/dd/yyyy"]').should('exist')
    cy.get('.v-label').should('contain', 'Select a date')
  })
})
