import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import vueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'

import './assets/all.scss'

const app = createApp(App)

app.use(vueAxios, axios)
app.use(createPinia())
app.use(router)

app.mount('#app')
