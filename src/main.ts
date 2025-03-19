import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDateInput } from 'vuetify/labs/VDateInput'

import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components: {
    ...components,
    VDateInput
  },
  directives,
});

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
