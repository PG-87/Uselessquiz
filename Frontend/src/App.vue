<template>
    <div id="app">
        <img class=logo alt="vue logo" src="./assets/logo.png">

        <div id="nav">
            <router-link to="/">Start</router-link>
            <router-link to="/faq">FAQ</router-link>
            <router-link to="/kontaktaoss">Kontakta oss</router-link>
            <router-link v-if="!authenticated" to="/login" v-on:click.native="setAuthenticated()" replace>Logga in</router-link>
            <router-link v-if="authenticated" to="/mypage" replace>Min sida</router-link>
            <router-link v-if="authenticated" to="/mypage" v-on:click.native="logout()" replace>Logga ut</router-link>
            <hr>
        </div>

        <router-view @authenticated="setAuthenticated" @user="setUser" />
        <Footer/>
    </div>
</template>

<script>
import Footer from "./components/Footer";

    export default {
        name: 'app',
        components: {
            Footer
        },

        data() {
            return {
                authenticated: false,
                user: null
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
            },
            setUser(id){
                this.user = id;
                console.log(this.user)
            },
            logout() {
                this.authenticated = false;
                console.log(this.authenticated);
                this.setUser(null)
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
        min-height: 1000px;
    }

    .logo {
        width: 100px;
        height: 100px;
        margin-top: 0;
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

    Footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
    }
</style>
