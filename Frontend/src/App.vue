<template>
  <div id="app">
    <img alt="vue logo" src="./assets/logo.png">
    <testingcomp/>
    <HelloWorld msg="Tjenare och välkommen"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import testingcomp from './components/testingcomp.vue'



export default {
  name: 'App',
  components: {
    HelloWorld,
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
</style>
