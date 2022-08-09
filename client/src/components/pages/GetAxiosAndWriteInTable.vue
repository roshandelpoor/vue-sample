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

          <table id="tableID" class="leftMar">
            <tr>
              <th>id</th>
              <th>name</th>
            </tr>

            <tr v-if="items.length > 0" v-for="i in items" :key="i.id">
              <td>
                <span>{{ i.id }}</span>
              </td>
              <td>
                <span>{{ i.name }}</span>
              </td>
            </tr>
          </table>

          <br>
          <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            top
            color="deep-purple accent-4"
          ></v-progress-linear>
          <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="3"
            class="elevation-1"
          ></v-data-table>

        </div>

        <p class="mrgT20"></p>
      </div>

      <p class="mrgT10"></p>

      <div class="box_get_price_down">
        <p class="mrgT10"></p>
        <input class="form-control" type="number" v-model="counterCallApi" placeholder="enter USD price ..."/>

        <p class="mrgT10"></p>
        <button class="btn btn-warning" id="btnClick" @click="fetchPrice">Convert</button>

        <p class="mrgT10"></p>
      </div>
    </center>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'GetAxiosAndWriteInTable',
  components: {axios},
  data () {
    return {
      msg: '(NEW Get) Call GET Api and Write In Table',
      items: [],
      counterCallApi: 0,
      loading: false,
      headers: [
        {
          text: 'id',
          align: 'start',
          sortable: true,
          value: 'id'
        },
        {text: 'name', value: 'name'},
        {text: 'username', value: 'username'}
      ],
      desserts: []
    }
  },
  watch: {
    loading (val) {
      if (!val) return

      setTimeout(() => (this.loading = false), 3000)
    }
  },
  methods: {
    fetchPrice () {
      (async () => {
        console.time()
        /* ---------------- */
        // loading start
        /* ---------------- */
        document.getElementById('btnClick').style.display = 'none'
        this.userId = ' loading ...'
        this.userToken = ' loading ...'
        this.loading = true

        /* ---------------- */
        // call api
        /* ---------------- */
        await axios({
          method: 'get',
          url: 'https://jsonplaceholder.typicode.com/users',
          timeout: 1000 * 60,
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Methods': 'POST, GET'
          }
        })
          .then(response => {
            // success response
            console.log(response)
            console.log(response.data)

            if (response.status === 200) {
              console.log('Axios:: Response Success From Api Method' + JSON.stringify(response))

              this.items = response.data
              this.desserts = response.data

              this.counterCallApi = parseInt(this.counterCallApi) + 1
              document.getElementById('btnClick').style.display = 'block'
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

        console.timeEnd()
      })()
    }
  },
  mounted: function () {
    this.fetchPrice()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$primary_1: #a2b9bc;

.get_price {
  margin-top: -50px;
  height: 200px;
  width: auto;
}

.box_get_price {
  min-height: 130px;
  width: 350px;
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
  margin: 10px;
  width: 95%;
}

table, tr, td, th {
  font-size: 20px;
  border: 1px solid #000;
  background-color: $primary_1;
}
</style>
