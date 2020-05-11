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
import Testingcomp from "./components/testingcomp";




export default {
  name: 'App',
  components: {
    Testingcomp,
    HelloWorld
  }
}
  const vm = new Vue({
  el: '#app',
    data: {
      newTodoText: '',
      todos: [
        {
          id: 1, title: 'Eat',
        },
        {
          id: 2, title: 'Sleep',
        },
        {
          id: 3, title: 'Repeat',
        }
      ],
      nextTodoId: 4
    },
    methods: {
      addNewTodo: function () {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        })
        this.newTodoText = ''
      }
    }
})

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
