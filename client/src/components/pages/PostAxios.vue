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
          <span>ID:</span><span>{{ userId }}</span>

          <p class="mrgT10"></p>
          <span>Token :</span><span>{{ userToken }}</span>
        </div>
      </div>

      <p class="mrgT10"></p>

      <div class="box_get_price_down">
        <p class="mrgT10"></p>
<!--        <input type="number" v-model="counterCallApi" placeholder="enter USD price ..."/>-->
        <v-text-field label="Another input" v-model="counterCallApi" placeholder="enter USD price ..."></v-text-field>

        <p class="mrgT10"></p>
        <button id="btnClick" @click="fetchPrice">Convert</button>

        <p class="mrgT10"></p>
      </div>
    </center>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PostAxios',
  components: { axios },
  data () {
    return {
      msg: '(NEW Post) Call GET Api',
      userId: ' loading ...',
      userToken: ' loading ...',
      counterCallApi: '0'
    }
  },
  methods: {
    fetchPrice () {
      (async () => {
        /* ---------------- */
        // loading start
        /* ---------------- */
        document.getElementById('btnClick').style.display = 'none'
        this.userId = ' loading ...'
        this.userToken = ' loading ...'

        /* ---------------- */
        // call api
        /* ---------------- */
        await axios({
          method: 'post',
          url: 'https://reqres.in/api/register',
          timeout: 1000 * 60,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, GET'
          },
          data: JSON.stringify({email: 'eve.holt@reqres.in', password: 'pistol'})
        })
          .then(response => {
            // success response
            console.log(response)
            console.log(response.data)

            if (response.status === 200) {
              console.log('Axios:: Response Success From Api Method' + JSON.stringify(response))
              if (response.data.token !== 'undefined') {
                this.userId = response.data.id
                this.userToken = response.data.token
                this.counterCallApi = parseInt(this.counterCallApi) + 1

                document.getElementById('btnClick').style.display = 'block'
              }
            }

            setTimeout(function () {
              // btn enable in timeout
              document.getElementById('btnClick').style.display = 'block'
            }, 90000)
          })
          .catch(function (error) {
            // fail response
            console.log(error)

            if (error.response) {
              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
            }

            console.log('Axios:: Response Error From Api Method' + JSON.stringify(error))
            alert('Error is Set :: ' + JSON.stringify(error))
          })
      })()
    }
  },
  mounted: function () {
    this.fetchPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.get_price {
  margin-top: -50px;
  height: 200px;
  width: auto;
}

.box_get_price {
  min-height: 130px;
  width: 250px;
  background-color: #fff;
  border: 1px Solid #bbb;
}

.box_get_price_down {
  min-height: 70px;
  width: 250px;
  background-color: #fff;
  border: 1px Solid #bbb;
}

.leftMar {
  text-align: left;
  margin-left: 10px;
}
</style>
