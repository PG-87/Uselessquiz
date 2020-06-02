<template>
    <div>
        <Menu v-bind="this.$attrs" @openMenu="openMenu" @closeMenu="closeMenu" right>
            <slot><router-link to="/" class="bm-burger-bars">Start</router-link></slot>
            <slot><router-link to="/faq">FAQ</router-link></slot>
            <slot><router-link to="/aboutus">Om oss</router-link></slot>
            <slot><router-link v-if="!this.$parent.authenticated" to="/login" v-on:click.native="setAuthenticated()" replace>Logga in</router-link></slot>
            <slot><router-link v-if="this.$parent.authenticated" to="/mypage" replace>Min sida</router-link></slot>
            <slot><router-link v-if="this.$parent.authenticated" to="/" v-on:click.native="logout()" replace>Logga ut</router-link></slot>
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
                this.$parent.toggleBlur = true
            },
            closeMenu() {
                this.$emit('closeMenu');
                this.$parent.toggleBlur = false
            },
            setAuthenticated() {
              this.$parent.setAuthenticated()
            },
            logout() {
                this.$parent.logout();
            }
        },
    };
</script>

<style scoped>

</style>