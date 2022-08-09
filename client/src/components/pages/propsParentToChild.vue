<template>
  <div>
    <h1>{{ msg }}</h1>
    <p class="mrgT20"></p>
    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <br>
    <br>

    <BTN btnType="btn btn-info" btnId="btn1" btnText="component child 1" @callFromChild="input=>this.childGetDataRecive=input">
      <span class="badge badge-light f18">inject text from parent into child</span>
      <br>
    </BTN>

    <BTN btnType="btn btn-danger" btnId="btn2" btnText="component child 2" @callFromChild="input=>this.childGetDataRecive=input"/>
    <BTN btnType="btn btn-primary" btnId="btn3" btnText="component child 3" @callFromChild="input=>this.childGetDataRecive=input"/>
    <BTN btnType="btn btn-info" btnId="btn4" btnText="component child 4" @callFromChild="input=>this.childGetDataRecive=input"/>
    <BTN btnType="btn btn-warning" btnId="btn5" btnText="component child 5" @callFromChild="input=>this.childGetDataRecive=input"/>
    <BTN btnType="btn btn-danger" btnId="btn6" btnText="component child 6" @callFromChild="input=>writeChildGetDataRecive(input)"/>

    <br>
    <button @click="add_to_card" class="f18 badge badge-warning">add to card</button>

    <br>
    <ul>
      <li v-for="(k, index) in card" :key="index">{{k.name}}</li>
    </ul>

  </div>
</template>

<script>
import BTN from '@/components/BTN'

export default {
  name: 'propsParentToChild',
  components: {BTN},
  data () {
    return {
      msg: 'share props Parent To Child',
      childGetDataRecive: '1234',
      card: []
    }
  },
  methods: {
    add_to_card () {
      this.card.push(Object.assign({}, this.card, {'name': this.childGetDataRecive}))
    },
    writeChildGetDataRecive (input) {
      this.childGetDataRecive = input
      console.log('2 propsParentToChild component value' + input)
      this.add_to_card()
    }
  },
  mounted: function () {
    console.log('propsParentToChild component is mounted' + this.childGetDataRecive)
  },
  updated: function () {
    console.log('propsParentToChild component is updated' + this.childGetDataRecive)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.f18 {
  font-size: 18px;
}
li {
  display: block;
}

</style>
