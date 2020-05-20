<template>
    <div id="scoreboard">
        <ul>
            <h3>Highscore för 10 frågor</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
        <ul>
            <h3>Highscore för 15 frågor</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
        <ul>
            <h3>Highscore för 20 frågor</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
        // props: {
        //     scriptStyle: String,
        // },
        data: function () {
            return {
                scores1: [
                    {id: 1, score: '100'},
                    {id: 2, score: '99'},
                    {id: 3, score: '98'},
                    {id: 4, score: '97'}
                ],
                scores2: [
                    {id: 1, score: '100'},
                    {id: 2, score: '99'},
                    {id: 3, score: '98'},
                    {id: 4, score: '97'}
                ],
                scores3: [
                    {id: 1, score: '100'},
                    {id: 2, score: '99'},
                    {id: 3, score: '98'},
                    {id: 4, score: '97'}
                ],
            }
        }
    }
</script>

<style scoped>

    #scoreboard {
        /*background-color: rgb(230,230,230);*/
        height: auto;
        width: 800px;
        margin: auto;
        display: grid;
        /*grid-template-areas: 'score1' 'score2' 'score3';*/
        grid-template-columns: 250px 250px 250px;
        grid-gap: 0 25px;
        /*grid-gap: 2px 25px;*/
        /*border: 2px solid #656565;*/
    }

    ul {
        width: 247px;
        margin: 0;
        text-align: center;
        padding: 0;
        display: grid;
        grid-template-rows: 50px;
        /*grid-gap: 2px;*/
        list-style: none;
        border: 2px solid #656565;
        border-radius: 5px;
    }

    h3 {
        height: 20px;
        font-size: 20px;
        margin: auto;
        text-align: center;
        /*background-color: white;*/
        /*background-color: rgb(230,230,230);*/
    }

    li {
        border-top: 1px solid #656565;
        height: 20px;
        font-size: 18px;
        /*background-color: white;*/
        /*background-color: rgb(230,230,230);*/
    }

</style>