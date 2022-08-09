// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import 'bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import vuetify from './plugins/vuetify'

import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    color: '#00acc1',
    autoSubmit: true,
    clearable: true
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>'
})
