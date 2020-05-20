<template>
    <div id="app">
        <img class=logo alt="vue logo" src="./assets/logo.png">
        <div id="nav">
            <router-link to="/">Home</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/kontaktaoss">Kontakta oss</router-link>
            <router-link v-if="!authenticated" to="/login" v-on:click.native="setAuthenticated()" replace>Logga in</router-link>
            <router-link v-if="authenticated" to="/mypage" replace>My Page</router-link>
            <router-link v-if="authenticated" to="/mypage" v-on:click.native="logout()" replace>Logga ut</router-link>
            <hr>
        </div>
        <router-view @authenticated="setAuthenticated" />

    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                authenticated: false,
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "home" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
                console.log(this.authenticated)
            },
            logout() {
                this.authenticated = false;
                console.log(this.authenticated);
                this.$router.push({path: '/'})
            }
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

    }

    .logo {
        width: 100px;
        height: 100px;
        margin-top: 0px;
    }

    a {
        color: darkslategrey;
        font-weight: bolder;
        text-decoration: none;
        padding: 0 10px;

    }

    a:hover,
    a:visited {
        text-decoration: underline;
    }
</style>
