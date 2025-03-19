import ButtonComponent from '@/components/shared/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders with the correct content', () => {
    cy.mount(ButtonComponent, { props: { content: 'Click Me' } })

    cy.get('button.v-btn').should('contain', 'Click Me')
  })

  // it('emits onClickButton event when clicked', () => {
  //   cy.mount(ButtonComponent, {
  //     props: {
  //       content: 'Click Me'
  //     }
  //   })

  //   cy.get('[data-test="custom-button"]')
  //     .click()
  //     .then(() => {
  //       // Verificar que el evento fue emitido
  //       Cypress.vueWrapper.emitted('onClickButton').should('have.length', 1)
  //     })
  // })
})
