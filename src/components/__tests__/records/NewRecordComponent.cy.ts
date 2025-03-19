import NewRecordComponent from '@/components/records/NewRecordComponent.vue'

describe('NewRecordComponent', () => {
  it('renders all form fields correctly', () => {
    cy.mount(NewRecordComponent)

    cy.get('input[name="name"]').should('exist')
    cy.get('input[name="last_name"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('input[name="comfirm_password"]').should('exist')
    cy.get('input[name="birth_date"]').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('.v-select').should('exist')
    cy.get('.v-switch').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('validates required fields and prevents submission on error', () => {
    cy.mount(NewRecordComponent)

    cy.get('button[type="submit"]').click()

    cy.contains('Nombre *').parent().find('.v-messages__message').should('exist')
    cy.contains('Contraseña *').parent().find('.v-messages__message').should('exist')
    cy.contains('Confirmar Contraseña *').parent().find('.v-messages__message').should('exist')
    cy.contains('Fecha de Cumpleaños *').parent().find('.v-messages__message').should('exist')
  })

  it('fills the form and submits successfully', () => {
    cy.mount(NewRecordComponent)

    cy.get('input[name="name"]').type('Juan')
    cy.get('input[name="last_name"]').type('Pérez')
    cy.get('input[name="password"]').type('123456')
    cy.get('input[name="comfirm_password"]').type('123456')
    cy.get('input[name="birth_date"]').type('2000-01-01')
    cy.get('input[name="email"]').type('juan@example.com')

    cy.get('.v-select').click()
    cy.get('.v-list-item').contains('Programar').click()

    cy.get('.v-switch').click()

    cy.get('button[type="submit"]').click()

    cy.window().its('console').invoke('log').should('be.calledWithMatch', /Datos validos/)
  })
})