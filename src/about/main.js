import { createApp } from 'vue'
import App from './App.vue'
import reveal from '../plugins/reveal'
import '../styles/tokens.css'
import '../styles/theme.css'

createApp(App).use(reveal).mount('#app')
