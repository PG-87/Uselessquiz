<template>
    <div id="mypage">
        <h1>Secure Area</h1>
        <p>
            This is users page {{this.$parent.user.user}}
        </p>
        <Scoreboard ref="scoreboard"/>
    </div>
</template>

<script>
    import Scoreboard from "../components/Scoreboard";

    export default {
        name: 'mypage',
        data() {
            return {};
        },
        components: {
            Scoreboard
        },
       mounted(){
            this.$refs.scoreboard.showResults(this.$parent.user.userId);
            this.$parent.footerPos = 'fixed';
       }
    }
</script>

<style scoped>

    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }

</style>