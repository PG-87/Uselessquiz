<template>
    <div id="scoreboard">
        <ul>
            <h3>Top score for 10 questions</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
        <ul>
            <h3>Top score for 15 questions</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
        <ul>
            <h3>Top score for 30 questions</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{ score.score }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",
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
        margin: 0 auto;
        display: grid;
        grid-template-areas: 'score1' 'score2' 'score3';
        grid-template-columns: 250px 250px 250px;
        grid-gap: 2px 23px;
    }

    ul {
        width: 250px;
        margin: 2px;
        text-align: center;
        padding: 0;
        display: grid;
        grid-template-rows: 60px;
        grid-gap: 2px;
        list-style: none;
    }

    h3 {
        height: 60px;
        font-size: 20px;
        margin: 0;
        /*background-color: white;*/
        background-color: rgb(230,230,230);
    }

    li {
        /*background-color: white;*/
        background-color: rgb(230,230,230);
    }

</style>