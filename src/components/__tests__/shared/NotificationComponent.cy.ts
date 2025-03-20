import NotificationComponent from '@/components/shared/NotificationComponent.vue'

describe('NotificationComponent', () => {
  it('renders the snackbar with the correct content', () => {
    cy.mount(NotificationComponent, {
      props: {
        content: 'Operation successful',
      },
    })

    cy.get('.v-snackbar').should('exist')
    cy.get('.text-center').should('contain', 'Operation successful')
  })
})
