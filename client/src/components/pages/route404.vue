<template>
  <div class="">
    <h1>{{ msg }}</h1>

    <p class="mrgT20"></p>

    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <p class="mrgT20"></p>

    <center>
      <div class="box_get_price">
          <p class="mrgT20"></p>
          <span class="f25">page not found</span>
        </div>
    </center>
  </div>
</template>

<script>
export default {
  name: '404',
  data () {
    return {
      msg: 'page not found'
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
