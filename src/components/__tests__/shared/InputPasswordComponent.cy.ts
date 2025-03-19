import InputPasswordComponent from '@/components/shared/InputPasswordComponent.vue'

describe('InputPasswordComponent', () => {
  it('renders the password input with the correct label', () => {
    cy.mount(InputPasswordComponent, {
      props: {
        name: 'password',
        label: 'Enter your password'
      }
    })

    cy.get('input[type="password"]').should('exist')
    cy.get('.v-label').should('contain', 'Enter your password')
  })
})