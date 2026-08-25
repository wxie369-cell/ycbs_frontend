// Centralized Vuetify with warm theme and icon set
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { fa } from 'vuetify/iconsets/fa'
import {
  VApp,
  VCard,
  VCol,
  VContainer,
  VDivider,
  VHover,
  VIcon,
  VImg,
  VMain,
  VProgressLinear,
  VRow,
} from 'vuetify/components'
import { Ripple } from 'vuetify/directives'

// Load shared design tokens before compatibility and base styles.
import '../styles/tokens.css'
import '../styles/theme.css'

// import "@mdi/font/css/materialdesignicons.css";
import '@fortawesome/fontawesome-free/css/fontawesome.css'
import '@fortawesome/fontawesome-free/css/solid.css'

const vuetify = createVuetify({
  components: {
    VApp,
    VCard,
    VCol,
    VContainer,
    VDivider,
    VHover,
    VIcon,
    VImg,
    VMain,
    VProgressLinear,
    VRow,
  },
  directives: { Ripple },
  defaults: {
    global: { ripple: true },
    VCard: { rounded: 'lg', class: 'spacious' },
    VContainer: { class: 'section' },
    VBtn: { rounded: 'xl' },
  },
  icons: {
    defaultSet: 'fa',
    sets: { fa },
  },
  theme: {
    defaultTheme: 'brand',
    themes: {
      brand: {
        dark: false,
        colors: {
          primary: '#770077',
          secondary: '#AA0077',
          background: '#FAF7EF',
          surface: '#FFFFFF',
          error: '#B00020',
          info: '#0000AA',
          success: '#16A34A',
          warning: '#F59E0B',
        },
      },
    },
  },
})

export default vuetify
