import SelectComponent from "@/components/shared/SelectComponent.vue"

describe('SelectComponent', () => {
  const options = ['Option 1', 'Option 2', 'Option 3']

  it('renders the select field with the correct label and options', () => {
    cy.mount(SelectComponent, {
      props: {
        name: 'choices',
        label: 'Select options',
        values: options
      }
    })

    cy.get('input[name="choices"]').should('exist')
    cy.get('.v-label').should('contain', 'Select options')

    // Abrir el menú de opciones
    cy.get('.v-select').click()
    options.forEach(option => {
      cy.get('.v-list-item-title').should('contain', option)
    })
  })

  it('render the corrects options', () => {
    cy.mount(SelectComponent, {
      props: {
        name: 'choices',
        label: 'Select options',
        values: options
      }
    })

    // Abrir el menú de opciones
    cy.get('.v-select').click()
    options.forEach(option => {
      cy.get('.v-list-item-title').should('contain', option)
    })
  })

  it('allows selecting multiple options', () => {
    cy.mount(SelectComponent, {
      props: {
        name: 'choices',
        label: 'Select options',
        values: options
      }
    })

    cy.get('.v-select').click()
    cy.get('.v-list-item').contains('Option 1').click()
    cy.get('.v-list-item').contains('Option 2').click()

    // Verificar que las opciones seleccionadas aparezcan como chips
    cy.get('.v-chip').should('have.length', 2)
    cy.get('.v-chip').first().should('contain', 'Option 1')
    cy.get('.v-chip').last().should('contain', 'Option 2')
  })
})