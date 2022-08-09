<template>
  <div>
    <h1>{{ msg }}</h1>
    <p class="mrgT20"></p>
    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <br>
    <br>

    <date-picker v-model="date" />
    <date-picker v-model="date" format="jYYYY jMMMM jDD"/>
    <date-picker v-model="date" initial-value="1370/01/01"/>
    <date-picker locale="en,fa" format="YYYY/M/D" />
    <date-picker simple />
    <date-picker popover="bottom-left" auto-submit color="#7b1fa2" />
    <date-picker range />
    <date-picker multiple />
    <date-picker type="datetime" />
    <date-picker type="time" />
    <date-picker type="year-month" />
    <date-picker type="year" />
    <date-picker type="month" />

  </div>
</template>

<script>
export default {
  name: 'datepicker',
  data () {
    return {
      msg: 'datepicker Components',
      date: '1396/05/03'
    }
  },
  beforeRouteLeave (to, from, next) {
    const res = confirm('are you sure?')
    next(res)
  },
  computed: {
  },
  methods: {
    changeRTL () {
      this.$vuetify.rtl = true
    }
  },
  mounted: function () {
    this.changeRTL()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
