<template>
    <div id="app">
        <Slider id="slider" ref="slide"/>

        <div id="wrapper" :class="{'blur-content': this.toggleBlur}">
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
        </div>
        <Footer :style="{position: footerPos}"/>
    </div>
</template>

<script>
import Footer from "./components/Footer";
import Slider from "./components/Slider";

    export default {
        name: 'app',
        components: {
            Footer,
            Slider
        },

        data() {
            return {
                authenticated: false,
                user: null,
                toggleBlur: false,
                footerPos: 'fixed'
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
            },
            logout() {
                this.authenticated = false;
                this.setUser(null);
                this.$router.push({path: '/'})
            }
        }
    }

</script>

<style>

    body {
        width: 100%;
        height: 100%;
        margin: 0;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        /*min-height: 1000px;*/
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
        /*position: ;*/

        left: 0;
        margin-bottom: 0;
        width: 100%;
    }

    #slider {
        display: none;
    }

    @media screen and (max-width: 768px) {
        #nav hr {
            display: none;
        }

        #slider {
            display: initial;
        }

        #nav {
            display: none;
        }

        .blur-content{
            filter: blur(5px);
        }

        Footer {
            /*position: relative;*/
        }
    }
</style>
