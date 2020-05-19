<template>
    <div id="home">
        <div class="welcoming" v-cloak>
        <br>
        <h1>Välkommen till Useless Quiz</h1>
        <p>Detta quiz är för dig som har tråkigt, sitter i karantän, kunskap nördar eller de som förbereder sig för "vem
            vet mest". Vi inbjuder dig att ha kul nu!</p>
        <p>Tryck på en av knapparna nedan för att starta ett quiz, eller logga in om du vill ha en chans att komma med på
            highscore listan.</p>
        </div>
        <Quiz></Quiz>
    </div>
</template>

<script>
    import Quiz from "../components/Quiz";

    export default {
        name: 'home',
        components: {
            Quiz,
        }
    }
</script>


<style scoped>
    h1 {
        margin-top: 30px;
        text-shadow: 2px 2px lightgrey;
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
        content : "";
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
        height: 100%;
        opacity : 0.5;
        z-index: -1;
    }
</style>