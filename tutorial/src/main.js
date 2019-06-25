import Vue from 'vue'
import App from './App.vue'
import Double from './Double.vue'


Vue.component('double-ss',Double);


new Vue({
  el : '#app',
  render: h => h(App),
});
