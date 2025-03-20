import InputTextComponent from '@/components/shared/InputTextComponent.vue'

describe('InputTextComponent', () => {
  it('renders the text input with the correct label', () => {
    cy.mount(InputTextComponent, {
      props: {
        name: 'username',
        label: 'Enter your username',
      },
    })

    cy.get('input[name="username"]').should('exist')
    cy.get('.v-label').should('contain', 'Enter your username')
  })
})
