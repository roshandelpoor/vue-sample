<template>
  <div class="">
    <button :class="btnType" :id="btnId" @click="alertX">{{ btnText }}</button>
    <br>

    <slot>
      Default show text
    </slot>

    <br>

  </div>
</template>

<script>
export default {
  name: 'BTN',
  props: ['btnType', 'btnId', 'btnText'],
  methods: {
    alertX () {
      this.$emit('callFromChild', this.btnText)
    }
  },
  mounted: function () {
    console.log('BTN component is mounted')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
