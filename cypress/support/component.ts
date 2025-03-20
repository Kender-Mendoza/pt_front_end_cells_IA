// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Import global styles
import { mount } from 'cypress/vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'

// import { createI18n } from 'vue-i18n'
// import validationsEs from "@/locales/es/validations.json";
// import viewsEs from "@/locales/es/views.json"
// import componentsEs from "@/locales/es/components.json"

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', (component, options = {}) => {
  const vuetify = createVuetify({
    components: {
      ...components,
      VDateInput
    },
    directives,
  })

  // const i18n = createI18n(
  //   {
  //     locale: 'es',
  //     messages: {
  //       es: {
  //         components: componentsEs,
  //         validations: validationsEs,
  //         views: viewsEs,
  //       }
  //     }
  //   }
  // )

  return mount(component, {
    global: {
      plugins: [
        vuetify,
        // i18n
      ],
    },
    ...options,
  })
})

// Example use:
// cy.mount(MyComponent)
