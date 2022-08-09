export default {
  created: function () {
    console.log('component is created')
  },
  methods: {
    alertRun () {
      alert('run function from mixins')
    }
  }
}
