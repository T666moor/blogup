import Vue from 'vue'
import App from './App.vue'
import JwPagination from 'jw-vue-pagination'
import BootstrapVue from 'bootstrap-vue'

Vue.component('jw-pagination', JwPagination)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
