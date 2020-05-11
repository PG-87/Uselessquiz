<template>
  <div id="app">
    <Header msg="Welcome to Useless-Quiz"/>
    <Scoreboard></Scoreboard>
    <Questions></Questions>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Questions from './components/Questions.vue'
import Scoreboard from "./components/Scoreboard";


export default {
  name: 'App',
  components: {
    Header,
    Questions,
    Scoreboard
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
