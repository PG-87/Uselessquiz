<template>
  <div id="app">
    <img class = logo alt="vue logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/login">FAQ</router-link>
      <router-link to="/login">Kontakta Oss</router-link>
      <router-view></router-view>
    </div>
    <hr>
    <testingcomp/>


  </div>
</template>

<script>
import testingcomp from './components/testingcomp.vue'



export default {
  name: 'App',
  components: {

    testingcomp
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .logo {
    width:100px;
    height: 100px;
    margin-top: 0px;
  }


a {
  color: lightseagreen;
  text-decoration: none;
  margin-right: 20px;
}
a:hover,
a:visited {
  text-decoration: underline;
}

</style>
