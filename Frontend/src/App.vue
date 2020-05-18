<template>
    <div id="app">
        <img class=logo alt="vue logo" src="./assets/logo.png">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/login">Logga in</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/kontaktaoss">Kontakta oss</router-link>
            <hr>
            <router-view></router-view>
        </div>

    </div>
</template>

<script>

</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*margin-top: 60px;*/
    }

    .logo {
        width: 100px;
        height: 100px;
        margin-top: 0px;
    }

    hr {
        /*width: 800px;*/
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
