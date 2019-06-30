import Vue from 'vue'
import App from './animations/App.vue'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.mixin({
    created() {
        console.log('Global Mixin');
    },
    data() {
        return {
            userData : {
                'username' : 'Admin',
                'token' : 'adoin234asodkasdmASNJasdokas'
            }
        }
    }
})

new Vue({
  el : '#app',
  render: h => h(App),
});
