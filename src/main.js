import Vue from 'vue'
import App from './App.vue'
import router from './router'
// src/main.js
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'node_modules/bootstrap-icons/font/bootstrap-icons.css';


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
