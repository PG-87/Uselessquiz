<template>
<!--    <Slide class="bm-overlay">-->
<!--        <router-link to="/" class="bm-burger-bars">Start</router-link>-->
<!--        <router-link to="/faq">FAQ</router-link>-->
<!--        <router-link to="/kontaktaoss">Kontakta oss</router-link>-->
<!--        <router-link v-if="!authenticated" to="/login" v-on:click.native="setAuthenticated()" replace>Logga in</router-link>-->
<!--        <router-link v-if="authenticated" to="/mypage" replace>Min sida</router-link>-->
<!--        <router-link v-if="authenticated" to="/mypage" v-on:click.native="logout()" replace>Logga ut</router-link>-->
<!--    </Slide>-->
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu" right>
            <slot><router-link to="/" class="bm-burger-bars">Start</router-link></slot>
            <slot><router-link to="/faq">FAQ</router-link></slot>
            <slot><router-link to="/kontaktaoss">Kontakta oss</router-link></slot>
            <slot><router-link v-if="!this.$parent.authenticated" to="/login" v-on:click.native="this.$parent.setAuthenticated()" replace>Logga in</router-link></slot>
            <slot><router-link v-if="this.$parent.authenticated" to="/mypage" replace>Min sida</router-link></slot>
            <slot><router-link v-if="this.$parent.authenticated" to="/mypage" v-on:click.native="this.$parent.logout()" replace>Logga ut</router-link></slot>
        </Menu>
    </div>
</template>

<script>
    import Menu from '../components/Menu';
    export default {
        name: 'slide',
        components: {
            Menu: Menu
        },
        methods: {
            openMenu() {
                this.$emit('openMenu');
            },
            closeMenu() {
                this.$emit('closeMenu');
            }
        },
    };
</script>

<style scoped>

    .slider {
        background-color: white;
    }
    .bm-burger-button {
        position: fixed;
        width: 36px;
        height: 30px;
        left: 36px;
        top: 36px;
        cursor: pointer;
    }
    .bm-burger-bars {
        /*background-color: white;*/
    }
    .line-style {
        position: absolute;
        height: 20%;
        left: 0;
        right: 0;
    }
    .cross-style {
        position: absolute;
        top: 12px;
        right: 2px;
        cursor: pointer;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-cross-button {
        height: 24px;
        width: 24px;
    }
    .bm-menu {
        height: 100%; /* 100% Full-height */
        width: 20px; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 1000; /* Stay on top */
        top: 0;
        left: 0;
        background-color: rgb(63, 63, 65); /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
        background: rgba(255, 0, 0, 0.3);
    }
    .bm-item-list {
        color: #b8b7ad;
        margin-left: 10%;
        font-size: 20px;
        background-color: white;
    }
    .bm-item-list > * {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        padding: 0.7em;
        background-color: #3498DB;
        color: white;
    }
    .bm-item-list > * > span {
        margin-left: 10px;
        font-weight: 700;
    }
</style>