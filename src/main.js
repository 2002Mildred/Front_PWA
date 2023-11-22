import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/router';
import store from './store'; 
import './js/registerSW'
import './css/style-medic.css'

loadFonts()
createApp(App)
  .use(store)
  .use(router)
  .use(vuetify)
  .mount('#app')
