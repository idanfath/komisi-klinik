import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.css'

import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(autoAnimatePlugin).use(router).mount('#app')
