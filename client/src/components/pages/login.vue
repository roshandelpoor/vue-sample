<template>
  <div class="">
    <h1 class="f25">{{ msg }}</h1>

    <p class="mrgT20"></p>

    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <br>
    <br>
    <br>
    <br>
    <button class="btn btn-danger" @click="logout()">logout and redirect to home</button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      msg: 'login is ok'
    }
  },
  methods: {
    logout () {
      sessionStorage.removeItem('login')
      this.$router.push('/')
    }
  },
  mounted: function () {
    sessionStorage.setItem('login', 'true')
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
