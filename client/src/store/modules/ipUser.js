export default {
  namespaced: true,
  state: {
    ipUSer: ''
  },
  getters: {
    getIp (state) {
      console.log('user.js Module getters ip Vuex call')
      return state.ipUSer
    }
  },
  mutations: {
    addItemToCard (state, newIp) {
      console.log('user.js Module Store ip Vuex call:: ' + newIp)
      state.ipUSer = newIp
    }
  },
  actions: {
    fetchPrice () {
      return fetch('https://api.dnslab.ir/ip',
        {
          method: 'Get',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
        .then(result => {
          // convert
          return result.json()
        })
        .then(data => {
          // success
          console.log('Response Success From Api Method' + JSON.stringify(data))
          return {
            result: true,
            data: data
          }
        })
        .catch(error => {
          // error
          console.log('Response Error From Api Method' + JSON.stringify(error))
          return {
            result: false,
            error: error
          }
        })
    }
  }
}
