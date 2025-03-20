import InputEmailComponent from '@/components/shared/InputEmailComponent.vue'

describe('InputEmailComponent', () => {
  it('renders the input with the correct label', () => {
    cy.mount(InputEmailComponent, {
      props: {
        name: 'email',
        label: 'Enter your email',
      },
    })

    cy.get('input[type="email"]').should('exist')
    cy.get('.v-label').should('contain', 'Enter your email')
  })
})
