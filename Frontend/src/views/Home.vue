<template>
    <div id="home">
        <h1>Välkommen till Useless Quiz</h1>
        <p>Detta quiz är för de som har tråkigt, sitter i karantän, kunskap nördar eller de som förbereder sig för "vem
            vet mest".</p>
        <p>Tryck på en av knapparna nedan för att starta ett quiz, eller logga in om du vill ha en chans att komma med på
            highscore listan.</p>
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
        text-shadow: 2px 2px darkgray;
        font-family: Calibri, Arial, sans-serif;
    }

    p {
        font-family: Calibri, Arial, sans-serif;
    }

</style>