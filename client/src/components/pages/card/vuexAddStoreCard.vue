<template>
  <div class="">
    <h1 class="f25">{{ msg }}</h1>

    <p class="mrgT20"></p>

    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <br>
    <br>
    <button class="btn btn-info" @click="addToCard()">add random to card</button>
    <br>
    <br>
    <span class="f25">count items: {{card.length}}</span>
    <br>
    <br>
    <br>
    <router-link to="/vuexShowStoreCard">
      show card (vuex)
    </router-link>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

function makeName () {
  let text = ''
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  return text
}

export default {
  name: 'vuexAddStoreCard',
  data () {
    return {
      msg: 'vuex add to card'
    }
  },
  computed: {
    card () {
      return this.$store.state.cardMo.card
    }
  },
  methods: {
    ...mapMutations('cardMo', ['addItemToCard']),
    addToCard () {
      const newItem = {}
      newItem.name = makeName()
      newItem.cost = Math.random()

      // this.$store.commit('cardMo/addItemToCard', newItem)
      this.addItemToCard(newItem)

      // OR
      // this.$store.commit('card/addItemToCard', {'name': makeId(), 'cost': Math.random()})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f25 {
  font-size: 25px;
  font-weight: bold;
}
</style>
