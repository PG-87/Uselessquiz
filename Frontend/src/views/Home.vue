<template>
    <div id="home">
        <div class="welcoming" v-cloak :style="home.style">
            <br>
            <h1>Välkommen till Useless Quiz</h1>
            <p>Detta quiz är för dig som har tråkigt, sitter i karantän, kunskap nördar eller de som förbereder sig för
                "vem
                vet mest". Vi inbjuder dig att ha kul nu!</p>
            <p>Tryck på en av knapparna nedan för att starta ett quiz, eller logga in om du vill ha en chans att komma
                med på
                highscore listan.</p>

            <button id="start" @click="togglePage">Starta quiz</button>
        </div>

        <Quiz :user="this.$parent.user" :style="quiz.style"></Quiz>

        <Scoreboard id="scoreboard" ref="scoreboard" :style="home.style"></Scoreboard>
    </div>
</template>

<script>
    import Quiz from "../components/Quiz";
    import Scoreboard from "../components/Scoreboard";

    export default {
        name: 'home',
        components: {
            Quiz,
            Scoreboard
        },
        data: function () {
            return {
                home: {style: {display: 'grid'}},
                quiz: {style: {display: 'none'}},
            }
        },
        props: {},
        methods: {
            togglePage: function () {
                if (this.$parent.user == null) {
                    alert("Observera att ditt resultat inte sparas\n om du inte är inloggad!!")
                }
                this.home.style.display = 'none';
                this.quiz.style.display = 'grid';
            }
        },
        mounted() {
            this.$refs.scoreboard.showResults(0);
        }
    }
</script>

<style scoped>
    h1 {
        margin-top: 30px;
        text-shadow: 2px 2px dimgray;
        font-family: Arial, sans-serif;
        font-size: 40px;
    }

    p {
        font-family: Arial, sans-serif;
        color: #2c3e50;
        font-size: large;
        font-weight: 800;
        margin-left: 50px;
        margin-right: 50px;
    }

    #home {
        position: relative;
        width: 800px;
        height: 70%;
        margin: 20px auto;
    }

    #home:after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        background-image: url(../assets/bored.jpg);
        -webkit-background-size: contain;
        -moz-background-size: contain;
        -o-background-size: contain;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100%;
        height: auto;
        min-height: 500px;
        opacity: 0.4;
        z-index: -1;
        border-radius: 5px;
    }

    #start {
        width: 200px;
        background-color: #3498DB;
        color: white;
        font-size: 25px;
        font-style: italic;
        position: relative;
        border-radius: 6px;
        height: 70px;
        margin: 50px auto auto;
    }

    #scoreboard {
        margin-top: 100px;
    }
</style>