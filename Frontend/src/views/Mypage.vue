<template>
    <div id="mypage">
        <h1>Välkommen till din sida</h1>
        <h3>
            Inloggad som: {{this.$parent.user.user}}
        </h3>
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