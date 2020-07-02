import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import './style/scss/app/main.scss';
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.config.productionTip = false
const base = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
	}
})
Vue.use(VueAxios, base)
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
