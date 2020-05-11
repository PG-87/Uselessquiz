<template>
  <div id="app">

      <img alt="Vue logo" src="assets/logo.png">
      <h1>{{helloMessage}}</h1>
      <HelloWorld msg="HELLO WORLD COMPONENT"></HelloWorld>
      <MyList></MyList>
      <MyBooks></MyBooks>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyBooks from "./components/MyBooks";
import MyList from "./components/MyList";

export default {
  name: 'App',
  components: {
      HelloWorld,
      MyBooks,
      MyList
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
  margin-top: 10px;
}
</style>
