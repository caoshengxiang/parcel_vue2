/**
 * Created by allen on 17-4-26.
 */
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './app.vue'

window.onload = function() {
  new Vue({
    el: '#app',
    store,
    router,
    // components: { App }
    render: h => h(App)
  })
}