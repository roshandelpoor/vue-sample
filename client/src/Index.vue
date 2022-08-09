<template>
  <div>
    <span class="f25">count items: {{ card.length }}</span>
    <br>
    <br>

    <v-card
      class="overflow-hidden mx-auto"
      max-width="600"
      max-height="800"
    >
      <v-bottom-navigation
        absolute
        hide-on-scroll
        horizontal
        scroll-target="#hide-on-scroll-example"
      >
        <v-btn
          color="deep-purple accent-4"
          text
        >
          <span>Recents</span>

          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn
          color="deep-purple accent-4"
          text
        >
          <span>Favorites</span>

          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn
          color="deep-purple accent-4"
          text
        >
          <span>Nearby</span>

          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-responsive
        id="hide-on-scroll-example"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-responsive height="2000">

          <p class="mrgT20"></p>
          <img src="./assets/logo.png" class="imageLogo" alt="logo"/>
          <h1>{{ msg }}</h1>

          <p class="mrgT20"></p>
          <router-link to="/login">
            <span class="badge badge-info">(login)</span> login and create localstorage
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/404">
            <span class="badge badge-info">(404 route)</span> 404 not found route
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/get-price">
            <span class="badge badge-info">(fetch POST)</span> fetch POST Api and Get ID And Token
          </router-link>

          <p class="mrgT20"></p>
          <router-link to="/get-ip">
            <span class="badge badge-info">(fetch GET + actions+ mutations + getters)</span> fetch Get IP
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/post-axios">
            <span class="badge badge-info">(axios POST)</span> axios Call Post Api
          </router-link>

          <p class="mrgT20"></p>
          <router-link to="/get-axios-table">
            <span class="badge badge-info">(axios GET)</span> axios Call GET Api and Write In Table
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/bootstrap4">
            <span class="badge badge-info">(bootstrap4)</span> Call bootstrap4
          </router-link>

          <p class="mrgT20"></p>
          <router-link to="/vuetify">
            <span class="badge badge-info">(vuetify + farsi font)</span> show components
          </router-link>

          <p class="mrgT20"></p>
          <router-link to="/datepickerCom">
            <span class="badge badge-info">(datepicker)</span> datepicker components
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/propsParentToChild">
            <span class="badge badge-info">(props)</span> share props Parent To Child
          </router-link>

          <hr>
          <p class="mrgT20"></p>
          <router-link to="/vuexAddStoreCard">
            <span class="badge badge-info">(Vuex)</span> vuex Add Store Card
          </router-link>

        </v-responsive>
      </v-responsive>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: 'This Is Vue.js Sample App'
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
.imageLogo {
  height: 50px;
  width: auto;
}
</style>
