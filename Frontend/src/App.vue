<template>
  <div id="app">
    <img alt="vue logo" src="./assets/logo.png">
    <testingcomp msg="DET FUNKAR JU!!!!"/>
    <button>HEJ</button>
    <HelloWorld msg="Tjenare och välkommen"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'




export default {
  name: 'App',
  components: {
    HelloWorld
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
