<template>
    <div id="scoreboard">
        <ol>
            <h3>Highscore för 10 frågor</h3>
            <li class="score" v-for="score in scores1" v-bind:key="score.id">{{score.user}} {{ score.score }}
                {{score.date}}
            </li>
        </ol>
        <ol>
            <h3>Highscore för 15 frågor</h3>
            <li class="score" v-for="score in scores2" v-bind:key="score.id">{{score.user}} {{ score.score }}
                {{score.date}}</li>
        </ol>
        <ol>
            <h3>Highscore för 20 frågor</h3>
            <li class="score" v-for="score in scores3" v-bind:key="score.id">{{score.user}} {{ score.score }}
                {{score.date}}</li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",

        data: function () {
            return {
                scores1: [
                    {id: 1, score: '', user: '', date: ''},
                    {id: 2, score: '', user: '', date: ''},
                    {id: 3, score: '', user: '', date: ''},
                    {id: 4, score: '', user: '', date: ''},
                    {id: 5, score: '', user: '', date: ''}
                ],
                scores2: [
                    {id: 1, score: '', user: '', date: ''},
                    {id: 2, score: '', user: '', date: ''},
                    {id: 3, score: '', user: '', date: ''},
                    {id: 4, score: '', user: '', date: ''},
                    {id: 5, score: '', user: '', date: ''}
                ],
                scores3: [
                    {id: 1, score: '', user: '', date: ''},
                    {id: 2, score: '', user: '', date: ''},
                    {id: 3, score: '', user: '', date: ''},
                    {id: 4, score: '', user: '', date: ''},
                    {id: 5, score: '', user: '', date: ''}
                ]
            }
        },
        mounted() {
            for (let i = 0; i < 3; i++) {
                let input;
                switch (i) {
                    case 0:
                        input = '10';
                        break;
                    case 1:
                        input = '15';
                        break;
                    case 2:
                        input = '20';
                        break;
                }
                fetch('http://127.0.0.1:3000/api/scores/' + input)
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        let highscoreArr = [];
                        data.forEach(function (entry) {
                            highscoreArr.push(entry)
                        });
                        let board;
                        switch (i) {
                            case 0:
                                board = this.scores1;
                                break;
                            case 1:
                                board = this.scores2;
                                break;
                            case 2:
                                board = this.scores3;
                                break;
                        }
                        console.log(highscoreArr);
                        let id = 0;
                        board.forEach(function (entry) {
                            entry.score = highscoreArr[id].Score;
                            entry.user = highscoreArr[id].user;
                            entry.date = highscoreArr[id].datetime;
                            id++;
                        })
                    })
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
        grid-gap: 2px 23px;
    }

    ol {
        width: 250px;
        /*margin: 2px;*/
        margin-left: 20px;
        text-align: left;
        padding: 0;
        display: grid;
        grid-template-rows: 60px;
        grid-gap: 2px;
    }

    h3 {
        height: 60px;
        font-size: 20px;
        margin: 0;
        /*background-color: white;*/
        /*background-color: rgb(230,230,230);*/
    }

    li {
        
        /*background-color: white;*/
        /*background-color: rgb(230,230,230);*/
    }

</style>