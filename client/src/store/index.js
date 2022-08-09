import Vue from 'vue'
import Vuex from 'vuex'

import cardModule from './modules/card'
import ipUserModule from './modules/ipUser'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cardMo: cardModule,
    userMo: ipUserModule
  }
})
