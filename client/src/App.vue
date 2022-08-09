<template>
  <v-app>
    <div id="app">
      <Menu/>
      <router-view class="marginFromRight"/>
    </div>
  </v-app>
</template>

<script>
import Menu from './components/master/Menu'

export default {
  name: 'App',
  components: {Menu}
}
</script>

<style>
@import 'assets/font/fontN.css';
@import 'assets/font/tagN_v2.css';

.marginFromRight {
  margin-right: 10% !important;
}

body {
  background-color: #f00 !important;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #00f;
}

.mrgT20 {
  margin-top: 40px;
}

.mrgT10 {
  margin-top: 20px;
}

</style>
