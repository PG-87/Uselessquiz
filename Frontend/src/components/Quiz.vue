<template>
    <div id="quiz" :style="quiz.style">
        <button class="answerButton" v-bind:style="{display: resultScreenStyle}" v-on:click="newGame()">Ny omgång!</button>
        <Scoreboard id="scoreboard" ref="score" v-bind:style="{display: resultScreenStyle}"></Scoreboard>

        <p v-bind:style="{display: resultScreenStyle}" v-if="this.windowWidth > 768">Score: {{ scoreSum }}/{{questions.length * 20}} | Totaltid: {{ this.totalTime }} s | Snittid: {{ this.totalTime / this.questions.length }} s</p>
        <p v-bind:style="{display: resultScreenStyle}" v-else>Score: {{ scoreSum }}/{{questions.length * 20}} Totaltid: {{ this.totalTime }} s Snittid: {{ this.totalTime / this.questions.length }} s</p>

        <ul id="result" v-for="r in resultArr" v-bind:key="r.question" v-bind:style="{display: resultScreenStyle}">
            <li><hr></li>
            <li>Fråga {{r.nr}}: {{ r.question }}</li>
            <li>Korrekt svar:  {{ r.correct_answer }} | Ditt svar:  {{ r.your_answer }} | Tid: {{ r.answer_time }} s</li>
        </ul>

        <h1 id="question">{{ question }}</h1>

        <timer id="timer" ref="timer" :style="{display: infoStyle}" :points="this.points"/>

        <section v-bind:style="{display: infoStyle}">

            <button class="answerButton" v-for="answer in answers" v-bind:key="answer.id" :style="answer.style"
                    v-on:click="checkAnswer(answer.id)" v-bind:disabled=answer.locked>{{
                answer.answer }}
            </button>

            <p id="score">Score: {{ scoreSum }}/{{questions.length * 20}}</p>
            <p id="round">Fråga: {{ questionNumber }}/{{questions.length}}</p>
        </section>

        <button id="nextButton" @click="nextQuestion(questionNumber)" style="display: block" v-bind:style="{display: nextStyle}">Nästa
            fråga
        </button>

        <ul id="startButton" :style="{display: startStyle}">
            <li><button class="start" @click="getQuestion(10)" v-bind:disabled=newGameLock>10 Frågor</button></li>
            <li><button class="start" @click="getQuestion(15)" v-bind:disabled=newGameLock>15 Frågor</button></li>
            <li><button class="start" @click="getQuestion(20)" v-bind:disabled=newGameLock>20 Frågor</button></li>
        </ul>

        <button id="resultButton" @click="showResult()" :style="{display: resultStyle}">Resultat</button>

    </div>
</template>

<script>
    import Timer from "./Timer";

    import Scoreboard from "./Scoreboard";
    export default {
        name: "Quiz",
        components: {
            Scoreboard,
            Timer
        },
        props: {
            toggleShow: String,
            correct: Boolean,
            user: Object,
        },
        data: function () {
            return {
                answers: [
                    {id: 1, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB'}},  //, display: 'none'}},
                    {id: 2, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB'}},  //, display: 'none'}},
                    {id: 3, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB'}},  //, display: 'none'}},
                    {id: 4, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB'}}  //, display: 'none'}}
                ],
                startStyle:  'inline', //lockButton: false,
                resultScreenStyle: 'none',
                resultStyle: 'none',
                nextStyle: 'none', //lockButton: false,
                infoStyle: 'none',

                quiz: {style: {backgroundColor: 'rgba(0,0,0,0)'}},

                newGameLock: false,
                questionNumber: 0,
                questions: [],
                resultArr: [],
                question: '',
                scoreSum: 0,
                totalTime: 0,
                points: 0,
                windowWidth: 0
            }
        },
        watch() {
            this.windowWidth = window.outerWidth
        },
        methods: {
            getQuestion(n) {
                if (window.outerWidth <= 768){
                    this.$emit('showFooter');
                    this.$emit('footerPosition');
                    console.log(window.outerWidth)
                }
                let input;
                switch (n) {
                    case 10:
                        input = '10';
                        break;
                    case 15:
                        input = '15';
                        break;
                    case 20:
                        input = '20';
                        break;
                }
                fetch('http://uselessquiz.se:3000/api/questions/range/' + input)
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        let q = this.questions;
                        data.forEach(function (entry) {
                            q.push(entry);
                        });
                        this.q = q;
                        this.newGameLock = true;
                        this.startStyle = 'none';
                        // this.answers.forEach(function (entry) {
                        //     entry.style.display = 'initial'
                        // });
                        this.nextStyle = 'initial';
                        this.infoStyle = 'grid';
                        this.nextQuestion(0);
                    })
            },
            nextQuestion(i) {
                this.answers.forEach(function (entry) {
                    entry.locked = false;
                    entry.correct = false;
                    entry.style.backgroundColor = '#3498DB';
                });
                this.nextStyle = 'none';
                this.question = this.questions[i].question;
                let correctAnswer = this.questions[i].correct_answer;
                let answerArray = [this.questions[i].correct_answer, this.questions[i].incorrect_answer[0], this.questions[i].incorrect_answer[1], this.questions[i].incorrect_answer[2]];
                answerArray.sort(() => Math.random() - 0.5);
                this.answers.forEach(function (entry) {
                    entry.answer = answerArray.pop();
                    if (entry.answer === correctAnswer) {
                        entry.correct = true;
                    }
                });
                this.questionNumber += 1;
                this.$refs.timer.startTimer();
            },
            checkAnswer(id) {
                this.$refs.timer.stopTimer();
                let i = id - 1,
                    q = this.question,
                    corrAns = this.questions[this.questionNumber - 1].correct_answer,
                    yourAns = this.answers[i].answer,
                    answerTime = 20 - this.$refs.timer.points;
                    this.totalTime += answerTime;
                if (this.answers[i].correct === true) {
                    this.answers[i].style.backgroundColor = '#60BF6B';
                    this.scoreSum += this.$refs.timer.points;
                } else {
                    this.answers[i].style.backgroundColor = '#ff3636';
                    this.answers.forEach(function (entry) {
                        if (entry.correct === true) {
                            entry.style.backgroundColor = '#60BF6B';
                        }
                    })
                }
                this.answers.forEach(function (entry) {
                    entry.locked = true
                });

                this.resultArr.push({nr: this.questionNumber, question: q, correct_answer: corrAns, your_answer: yourAns, answer_time: answerTime});

                if (this.questionNumber < this.questions.length) {
                    this.nextStyle = 'initial';
                } else if (this.questionNumber >= this.questions.length) {
                    this.resultStyle = 'initial'
                }
            },
            putResult(){
                const requestOptions = {
                    method: "PUT",
                    mode: 'cors',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({userId:this.user.userId,score:this.scoreSum,questionAmount:this.questions.length})
                };
                fetch("http://uselessquiz.se:3000/api/addscore", requestOptions);
            },
            showResult: async function () {
                this.$emit('footerPosition');
                if(!(this.user==null)) {
                  await this.putResult();
                }

                // this.answers.forEach(function (entry) {
                //     entry.style.display = 'none'
                // });
                // this.nextStyle = 'none';

                this.infoStyle = 'none';
                this.question = '';
                this.resultStyle = 'none';
                this.resultScreenStyle = 'grid';
                this.quiz.style.backgroundColor = 'white';
                // this.footerPosition.style.position = 'page';
               await this.$refs.score.showResults(0);
            },
            newGame() {
                this.startStyle = 'inline';
                this.resultScreenStyle = 'none';
                this.questionNumber = 0;
                this.questions = [];
                this.resultArr = [];
                this.question = '';
                this.scoreSum = 0;
                this.totalTime = 0;
                this.points = 0;
                this.newGameLock = false;
                this.quiz.style.backgroundColor = "rgba(0,0,0,0)";
                this.$emit('footerPositionStart');
            }
        }
    }
</script>

<style scoped>

    #quiz {
        height: auto;
        width: 800px;
        display: grid;
        grid-template-rows: minmax(150px, auto) auto auto 100px;
        background-color: white;
        margin: auto auto 70px;
    }

    #question {
        text-align: center;
        margin: auto 20px;
        color: #2c3e50;
    }

    #timer {
        position: relative;
        justify-self: center;
        margin-bottom: 15px;
    }

    section {
        display: grid;
        grid-template-columns: 350px 350px;
        grid-template-rows: 100px 100px;
        margin: auto;
    }

    button {
        border-radius: 6px;
        height: 70px;
        margin: auto;
        align-content: center;
    }

    .answerButton {
        width: 320px;
        font-size: 20px;
        color: white;
        background-color: #3498DB;
    }

    .answerButton:hover {
        background-color: #2980B9;
    }

    #nextButton, #resultButton {
        width: 200px;
        background-color: #3498DB;
        color: white;
        font-size: 25px;
        font-style: italic;
        position: relative;
    }

    .start {
        width: 150px;
        background-color: #3498DB;
        color: antiquewhite;
        font-weight: bolder;
        font-family: Arial, sans-serif;
        font-size: 20px;
        position: relative;
    }

    .start:hover {
        background-color: #9c93a3 ;
    }

    #nextButton:hover, #resultButton:hover {
        background-color: #2980B9;
    }

    li {
        list-style: none;
    }

    #startButton li {
        display: inline;
        padding: 0 10px 0 0;
    }

    #startButton {
        position: absolute;
        top: 200px;
        left: 50px;
        right: 50px;
        padding: 0;
        margin: auto;
    }

    p {
        font-size: 20px;
    }

    #score {
        text-align: end;
        margin-right: 10px;
    }

    #round {
        text-align: start;
        margin-left: 10px;
    }

    #scoreboard {
        height: auto;
        margin-bottom: 25px;
    }

    hr {
        width: 100%;
        margin-bottom: 27px;
        margin-top: 0;
        padding: 0;
    }

    #result {
        margin-top: 0;
        padding-left: 0;
        padding-bottom: 10px;
    }

    #result li {
        padding-bottom: 0;
        font-size: 20px;
    }

    @media screen and (max-width: 768px) {

        #quiz {
            grid-template-rows: minmax(100px, auto) auto auto minmax(50px, auto);
            width: auto;
            margin-bottom: 0;
        }

        #quiz p {
            width: 40%;
            justify-self: center;
        }

        #question {
            font-size: 20px;
            word-break: break-word;
            text-align: center;
            margin: auto 20px;
            max-width: 90%;
        }

        #startButton {
            position: static;
            margin-top: 10%;
            padding: 0;
        }

        #startButton button {
            margin: 8px;
        }

        section{
            grid-template-columns: 350px;
            grid-template-rows: 50px;
            grid-gap: 7px 0;
            margin: auto;
        }

        .answerButton {
            width: 250px;
            height: 50px;
            font-size: 20px;
            color: white;
        }

        #nextButton, #resultButton {
            width: 150px;
            height: 50px;
            background-color: #3498DB;
            color: white;
            font-size: 20px;
            font-style: italic;
            position: relative;
            /*margin-right: ;*/
        }

        #score, #round {
            text-align: center;
            margin: auto;
        }
        #result {
            width: 90%;
            justify-self: center;
            margin-bottom: 0;
        }
        #result li {
            font-size: 15px;
        }

        hr {
            margin-bottom: 10px;
        }

        ul {
            margin-bottom: 10px;
        }
    }

</style>