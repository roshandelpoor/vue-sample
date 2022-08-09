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
        <div class="leftMar">

          <p class="mrgT20"></p>
          <span>IP : </span><span>{{ ip }}</span>

        </div>
      </div>

      <p class="mrgT10"></p>

      <div class="box_get_price_down">
        <p class="mrgT10"></p>
        <button class="btn btn-info" id="btnClick" v-on:click="fetchPrice">Get Ip</button>

        <p class="mrgT10"></p>
      </div>
    </center>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapGetters} from 'vuex'

function alertGlobalFunction () {
  alert('alertGlobalFunction in only this components')
}

export default {
  name: 'GetIp',
  data () {
    return {
      msg: 'Call Get Api and Get IP USER'
    }
  },
  computed: {
    // ...mapState('userMo', {ip: 'ip'}),
    ...mapGetters('userMo', {ip: 'getIp'})
  },
  methods: {
    ...mapActions('userMo', ['fetchPrice']),
    ...mapMutations('userMo', ['addItemToCard'])
  },
  mounted: function () {
    this.fetchPrice().then((response) => {
      console.log('result get fetchPrice from actions :: ' + JSON.stringify(response))
      if (response.result === true) {
        this.addItemToCard(response.data.iPv4)
        setTimeout(function () {
          alertGlobalFunction()
        }, 8000)
      } else {
        // error
        alert('Error is Set :: ' + JSON.stringify(response.error))
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.get_price {
  margin-top: -50px;
  height: 300px;
  width: auto;
}

.box_get_price {
  min-height: 90px;
  width: 250px;
  background-color: #fff;
  border: 1px Solid #bbb;
}

.box_get_price_down {
  min-height: 45px;
  width: 250px;
  background-color: #fff;
  border: 1px Solid #bbb;
}

.leftMar {
  text-align: left;
  margin-left: 10px;
}
</style>
