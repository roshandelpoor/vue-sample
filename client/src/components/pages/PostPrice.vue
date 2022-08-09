<template>
  <div class="">
    <img src="../../assets/get_price.png" class="get_price" alt="get price"/>
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
          <span>ID:</span><span>{{ rialValue }}</span>

          <p class="mrgT10"></p>
          <span>Token :</span><span>{{ usdValue }}</span>
        </div>
      </div>

      <p class="mrgT10"></p>

      <div class="box_get_price_down">
        <p class="mrgT10"></p>
        <input type="number" v-model="usedValueInput" placeholder="enter USD price ..."/>

        <p class="mrgT10"></p>
        <button id="btnClick" @click="fetchPrice">Convert</button>

        <p class="mrgT10"></p>
      </div>
    </center>

  </div>
</template>

<script>
export default {
  name: 'GetPrice',
  data () {
    return {
      msg: 'Call POST Api and Get ID And Token',
      rialValue: 'Not Set',
      usdValue: 'Not Set',
      usedValueInput: '0'
    }
  },
  methods: {
    fetchPrice () {
      (async () => {
        /* ---------------- */
        // loading start
        /* ---------------- */
        document.getElementById('btnClick').style.display = 'none'

        /* ---------------- */
        // call api
        /* ---------------- */
        const rawResponse = await fetch('https://reqres.in/api/register',
          {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: 'eve.holt@reqres.in', password: 'pistol'})
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

        /* ---------------- */
        // loading end
        /* ---------------- */
        document.getElementById('btnClick').style.display = 'block'

        /* ---------------- */
        // process response
        /* ---------------- */

        console.log('Response Final CALL Api' + JSON.stringify(rawResponse))
        // success
        if (rawResponse.result === true) {
          this.rialValue = rawResponse.data.id
          this.usdValue = rawResponse.data.token
          this.usedValueInput = parseInt(parseInt(this.usedValueInput) + 1)
        } else {
          // error
          alert('Error is Set :: ' + JSON.stringify(rawResponse.error))
        }
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
