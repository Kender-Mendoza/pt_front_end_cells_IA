describe('Record Managment', () => {
  beforeEach(() => {
    cy.visit('/record')
  });

  context('When visit the path', () => {
    it('Allow to see "Crear registro" button', () => {
      cy.get('button').contains('Crear Registro')
    })
  })

  context('When click "Crear registro" button', () => {
    it('Allow to see modal', () => {
      cy.get('button').contains('Crear Registro').click()
      cy.get('div.v-card-title').contains('Nuevo Registro')

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

      cy.get('input[name="recibe_info"][type="checkbox"]').as('checkboxInput')
      cy.get('@checkboxInput').should('exist')
      cy.get('@checkboxInput').should('be.checked')

      cy.get('.v-label').should('contain', 'Desea recibir información')

      cy.get('input[name="email"]').should('exist')
      cy.get('.v-label').should('contain', 'E-mail')

      cy.get('p.text-medium-emphasis.ps-2.text-caption').contains('* Indica los campos requridos.')

      cy.get('button').contains("Cancelar")
      cy.get('button').contains("Crear")
    })
  })

  context('When form is invalid', () => {
    it('Should see error messages on inputs', () => {
      cy.get('button').contains('Crear Registro').click()

      cy.get('button[type="submit"]').contains('Crear').click()

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
  })

  context("When passwords field is invalid", () => {
    beforeEach(() => {
      cy.get('button').contains('Crear Registro').click()
    });

    it('Should see match error', () => {
      cy.get('input[name="password"]').type('root1234')
      cy.get('input[name="comfirm_password"]').type('root123')

      cy.get('input[name="comfirm_password"]')
        .closest('.v-input__control')
        .next()
        .contains('Las contraseñas deben coincidir')
    })

    it('Should see error lenght', () => {
      cy.get('input[name="password"]').type('root123456789101112131415')
      cy.get('input[name="comfirm_password"]').type('root12345')

      cy.get('input[name="password"]')
        .closest('.v-input__control')
        .next()
        .contains('Debe tener como máximo 20 caracteres')

      cy.get('input[name="comfirm_password"]')
        .closest('.v-input__control')
        .next()
        .contains('Las contraseñas deben coincidir')
    })
  })

  context("When email field is invalid", () => {
    beforeEach(() => {
      cy.get('button').contains('Crear Registro').click()
    });

    it('Should see invalid date format error', () => {
      cy.get('input[name="email"]').type("123")

      cy.get('input[name="email"]')
        .closest('.v-input__control')
        .next()
        .contains('Debe ser un correo válido')
    })
  })

  context('When form is valid', () => {
    beforeEach(() => {
      cy.get('button').contains('Crear Registro').click()
    });

    it('Should allow to see the modal', () => {
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

      cy.get('.v-snackbar__wrapper').contains('Registro creado correctamente')
    });
  });
});
