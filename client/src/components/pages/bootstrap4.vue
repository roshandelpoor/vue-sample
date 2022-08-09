<template>
  <div class="bootstrap4">

    <p class="mrgT20"></p>

    <router-link to="/" target="_parent">
      Back To Main
    </router-link>

    <p class="mrgT20"></p>

    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <span class="badge badge-primary">Primary</span>
          <span class="badge badge-secondary">Secondary</span>
          <span class="badge badge-success">Success</span>
          <span class="badge badge-danger">Danger</span>
          <span class="badge badge-warning">Warning</span>
          <span class="badge badge-info">Info</span>
          <span class="badge badge-light">Light</span>
          <span class="badge badge-dark">Dark</span>
        </div>
        <div class="col-sm-4">
          <button type="button" class="btn">Basic</button>
          <button type="button" class="btn btn-primary">Primary</button>
          <button type="button" class="btn btn-secondary">Secondary</button>
          <button type="button" class="btn btn-success">Success</button>
          <button type="button" class="btn btn-info">Info</button>
          <button type="button" class="btn btn-warning">Warning</button>
          <button type="button" class="btn btn-danger">Danger</button>
          <button type="button" class="btn btn-dark">Dark</button>
          <button type="button" class="btn btn-light">Light</button>
          <button type="button" class="btn btn-link">Link</button>
        </div>
        <div class="col-sm-4">
          <div class="progress">
            <div class="progress-bar" style="width:70%">70%</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import mixFunction from '../mixins/createdHook-mixins'

export default {
  name: 'bootstrap4',
  mixins: [mixFunction],
  mounted: function () {
    this.alertRun()
  }
}
</script>

<style lang="scss" scoped>
body {
  a {
    font-size: 30px;
  }
}
</style>
