import NewRecordComponent from '@/components/records/NewRecordComponent.vue'

//? Skipping due to a configuration bug with I18n.

describe.skip('NewRecordComponent', () => {
  it('renders all form fields correctly', () => {
    cy.mount(NewRecordComponent)

    cy.get('input[name="name"]').should('exist')
    cy.get('.v-label').should('contain', 'Nombre *')

    cy.get('input[name="last_name"]').should('exist')
    cy.get('.v-label').should('contain', 'Apellidos')

    cy.get('input[name="password"]').should('exist')
    cy.get('.v-label').should('contain', 'Contraseña *')

    cy.get('input[name="comfirm_password"]').should('exist')
    cy.get('.v-label').should('contain', 'Confirmar Contraseña *')

    cy.get('input[name="birth_date"]').should('exist')
    cy.get('.v-label').should('contain', 'Fecha de Nacimiento *')

    cy.get('input[name="intereses"]').should('exist')
    cy.get('.v-label').should('contain', 'Intereses')

    cy.get('input[aria-label="Desea recibir información"]').as('checkboxInput')
    cy.get('@checkboxInput').should('exist')
    cy.get('@checkboxInput').should('be.checked')

    cy.get('.v-label').should('contain', 'Desea recibir información')

    cy.get('input[name="email"]').should('exist')
    cy.get('.v-label').should('contain', 'E-mail')

    cy.get('p.text-medium-emphasis.ps-2.text-caption').contains('* Indica los campos requridos.')

    cy.get('button').contains("Cancelar")
    cy.get('button').contains("Crear")
  })

  it('validates required fields and prevents submission on error', () => {
    cy.mount(NewRecordComponent)

    cy.get('button[type="submit"]').click()

    cy.get('input[name="name"]')
      .closest('.v-input__control')
      .next()
      .contains('Este campo es obligatorio')

    cy.get('input[name="password"]')
      .closest('.v-input__control')
      .next()
      .contains('Este campo es obligatorio')

    cy.get('input[name="comfirm_password"]')
      .closest('.v-input__control')
      .next()
      .contains('Este campo es obligatorio')

    cy.get('input[name="birth_date"]')
      .closest('.v-input__control')
      .next()
      .contains('Este campo es obligatorio')

    cy.get('input[name="email"]')
      .closest('.v-input__control')
      .next()
      .contains('Este campo es obligatorio')
  })

  it('fills the form and submits successfully', () => {
    cy.mount(NewRecordComponent,
      {
        props: {
          onCloseModal: cy.spy().as('closeModalSpy')
        }
      }
    )

    cy.get('input[name="name"]').type("Cristiano")
    cy.get('input[name="last_name"]').type('Ronaldo')
    cy.get('input[name="password"]').type('root1234')
    cy.get('input[name="comfirm_password"]').type('root1234')
    cy.get('input[name="birth_date"]').click()
    cy.get('button').contains("10").click()
    cy.get('button span.v-btn__content').contains("OK").click()
    cy.get('.v-select').click()
    cy.get('div.v-list-item-title').contains("Leer").click()
    cy.get('input[name="email"]').type("cristianoronaldo@email.com")
    cy.get('.v-label').should('contain', 'Intereses')
    cy.get('button[type="submit"]').click()

    cy.get('@closeModalSpy').should('have.been.called')
  })
})
