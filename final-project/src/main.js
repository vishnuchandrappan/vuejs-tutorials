import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';


Vue.use(VueRouter);
Vue.use(BootstrapVue);


import { routes } from './routes';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false


const router = new VueRouter({
    routes,
    mode : "history"
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
