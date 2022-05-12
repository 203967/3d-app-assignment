import { createApp } from 'vue'
import App from './App.vue'

import router from './router'



import './assets/css/bootstrap-4.4.1.css'
import './assets/css/x3dom.css'
import './assets/css/all.css'
import './assets/css/custom.css'

const vue = createApp(App)
  .use(router)


vue.mount('#app')
console.log(import.meta.env);