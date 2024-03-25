/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'


// Composables
import {createVuetify} from 'vuetify'


// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VTextField: {
      class: 'text-no-wrap',
      variant: 'outlined',
      density: 'compact'
    },
    VAppBar: {
      color: 'green',
      flat: true
    },
    VToolbar: {
      color: 'green',
      flat: true
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          background: 'f0f0f0'
        }
      }
    }
  }
})
