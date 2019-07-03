import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// var VueResource = require('vue-resource');
import VueResource from 'vue-resource'
Vue.use(VueResource);

new Vue({
  render: h => h(App),
}).$mount('#app')
