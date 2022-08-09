<template>
  <div>
    <h1>{{ msg }}</h1>
    <p class="mrgT20"></p>
    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <br>
    <br>
    <span>با استفاده از این سرویس می توانید به صورت آنلاین و بدون نیاز مراجعه به شعبه، در بانک قرض الحسنه مهر ایران افتتاح حساب نمایید و کارت بانکی خود را در محل دلخواه دریافت کنید.</span>
    <br>
    <br>

    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          با استفاده از این سرویس می توانید به صورت آنلاین و بدون نیاز مراجعه به شعبه، در بانک قرض الحسنه مهر ایران افتتاح حساب نمایید و کارت بانکی خود را در محل دلخواه دریافت کنید.
          با استفاده از این سرویس می توانید به صورت آنلاین و بدون نیاز مراجعه به شعبه، در بانک قرض الحسنه مهر ایران افتتاح حساب نمایید و کارت بانکی خود را در محل دلخواه دریافت کنید.
          با استفاده از این سرویس می توانید به صورت آنلاین و بدون نیاز مراجعه به شعبه، در بانک قرض الحسنه مهر ایران افتتاح حساب نمایید و کارت بانکی خود را در محل دلخواه دریافت کنید.
          با استفاده از این سرویس می توانید به صورت آنلاین و بدون نیاز مراجعه به شعبه، در بانک قرض الحسنه مهر ایران افتتاح حساب نمایید و کارت بانکی خود را در محل دلخواه دریافت کنید.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="374"
    >
      <template slot="progress">
        <v-progress-linear
          color="deep-purple"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          v-model="selection"
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>5:30PM</v-chip>

          <v-chip>7:30PM</v-chip>

          <v-chip>8:00PM</v-chip>

          <v-chip>9:00PM</v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="deep-purple lighten-2"
          text
          @click="reserve"
        >
          Reserve
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-select
      :items="items"
      filled
      label="Filled style"
      clearable
    ></v-select>

    <v-otp-input
      v-model="otp"
      :length="length"
      dark
    ></v-otp-input>

  </div>
</template>

<script>
export default {
  name: 'vuetify',
  data () {
    return {
      msg: 'Call Vuetify Components',
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      dialog: false,
      loading: false,
      selection: 1,
      otp: '',
      length: 7
    }
  },
  computed: {
    isActive () {
      return this.otp.length === this.length
    }
  },
  methods: {
    changeRTL () {
      this.$vuetify.rtl = true
    },
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    }
  },
  mounted: function () {
    this.changeRTL()
    this.reserve()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
