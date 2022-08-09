export default {
  namespaced: true,
  state: {
    card: []
  },
  mutations: {
    addItemToCard (state, newItem) {
      console.log('card.js Module Store Vuex call')
      state.card.push(newItem)
    }
  }
}
