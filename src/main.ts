import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "@/router/router";
import store from './store'
import i18n from "@/i18n/i18n";

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
