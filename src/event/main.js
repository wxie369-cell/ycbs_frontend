import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '../plugins/vuetify'
import reveal from '../plugins/reveal'

createApp(App).use(vuetify).use(reveal).mount('#app')
