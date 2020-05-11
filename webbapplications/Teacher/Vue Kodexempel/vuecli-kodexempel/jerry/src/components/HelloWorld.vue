<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <button @click="knappfunk" v-bind:style="{display: toggle}">GÖM MIG</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    toggle: String
  },
  methods: {
    knappfunk: function () {
      this.toggle = "none"
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
  color: #42b983;
}
</style>
