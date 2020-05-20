<template>
    <div id="scoreboard">
        <table>
            <caption>Highscore 10 Frågor!</caption>
            <thead>
            <tr>
                <th v-for="(field, index) in fields" :key="index">{{field}}</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(score, index) in scores1" :key="index">
                    <td v-for="(field, indexColumn) in fields" :key="indexColumn">{{score[field]}}</td>
                </tr>
            </tbody>
        </table>
        <table>
            <caption>Highscore 15 Frågor!</caption>
            <thead>
            <tr>
                <th v-for="(field, index) in fields" :key="index">{{field}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(score, index) in scores2" :key="index">
                <td v-for="(field, indexColumn) in fields" :key="indexColumn">{{score[field]}}</td>
            </tr>
            </tbody>
        </table>
        <table>
            <caption>Highscore 20 Frågor!</caption>
            <thead>
            <tr>
                <th v-for="(field, index) in fields" :key="index">{{field}}</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(score, index) in scores3" :key="index">
                <td v-for="(field, indexColumn) in fields" :key="indexColumn">{{score[field]}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "Scoreboard",

        data: function () {
            return {
                fields: [
                    "Score", 'User', 'Date'
                ],
                scores1: [
                    {id: 1, Score: '', User: '', date: ''},
                    {id: 2, Score: '', User: '', date: ''},
                    {id: 3, Score: '', User: '', date: ''},
                    {id: 4, Score: '', User: '', date: ''},
                    {id: 5, Score: '', User: '', date: ''}
                ],
                scores2: [
                    {id: 1, Score: '', User: '', date: ''},
                    {id: 2, Score: '', User: '', date: ''},
                    {id: 3, Score: '', User: '', date: ''},
                    {id: 4, Score: '', User: '', date: ''},
                    {id: 5, Score: '', User: '', date: ''}
                ],
                scores3: [
                    {id: 1, Score: '', User: '', date: ''},
                    {id: 2, Score: '', User: '', date: ''},
                    {id: 3, Score: '', User: '', date: ''},
                    {id: 4, Score: '', User: '', date: ''},
                    {id: 5, Score: '', User: '', date: ''}
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
                            entry.Score = highscoreArr[id].Score;
                            entry.User = highscoreArr[id].user;
                            entry.Date = highscoreArr[id].datetime;
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
        overflow-x:auto;
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


    table {
        border-collapse: collapse;
        background-color: white;
        font-family: Calibri, sans-serif;
    }

    table td, th {
        /*border: 1px solid black;*/
        padding: 3px;
        width: 100px;
    }
    table th {
        padding: 5px;
        text-align: center;
        background-color: darkslateblue;
        color: white;
    }
    table caption {
        font-size: 21px;
    }
    /*table tr:nth-child(even){background-color: #f2f2f2;}*/

    table tr:hover {background-color: #ddd;}
</style>