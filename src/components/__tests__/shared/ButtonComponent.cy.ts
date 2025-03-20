import ButtonComponent from '@/components/shared/ButtonComponent.vue'

describe('ButtonComponent', () => {
  it('renders with the correct content', () => {
    cy.mount(ButtonComponent, { props: { content: 'Click Me' } })

    cy.get('button.v-btn').should('contain', 'Click Me')
  })

  it('emits onClickButton event when clicked', () => {
    cy.mount(ButtonComponent, {
      props: {
        content: 'Click Me',
        onClick: cy.spy().as('clickSpy'),
      },
    })

    cy.get('button.v-btn').click()
    cy.get('@clickSpy').should('have.been.called')
  })
})
