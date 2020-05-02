import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from "@/router/router";
import store from './store'
import i18n from "@/i18n/i18n";
import VueCookie from "vue-cookies";

Vue.config.productionTip = false

Vue.use(VueCookie);

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
