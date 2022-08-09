<template>
  <div class="">
    <h1 class="f25">{{ msg }}</h1>

    <p class="mrgT20"></p>

    <router-link to="/vuexAddStoreCard" target="_parent">
      Back To vuexAddStoreCard
    </router-link>

    <br>
    <br>
    <br>
    <p v-for="(c,index) in card" :key="index">
      <span class="bo">Name: </span>{{c.name}},
      <span class="bo">Cost: </span>: {{c.cost}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'vuexShowStoreCard',
  data () {
    return {
      msg: 'vuex show card'
    }
  },
  computed: {
    card () {
      return this.$store.state.cardMo.card
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
.bo {
  font-weight: bold;
  font-size: 25px;
}
</style>
