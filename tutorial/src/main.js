import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import CMP from './components/HelloWorld.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.component('double-ss',CMP);


new Vue({
  el : '#app',
  render: h => h(App),
});
