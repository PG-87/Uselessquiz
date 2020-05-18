<template>
    <div id="quiz">
        <Scoreboard id="scoreboard" v-bind:style="resultScreen.style"></Scoreboard>
        <ul id="result" v-for="r in resultArr" v-bind:key="r.question" v-bind:style="resultScreen.style">
            <li><hr></li>
            <li>Fråga {{r.nr}}: {{ r.question }}</li>
            <li>Korrekt svar:  {{ r.correct_answer }} | Ditt saver:  {{ r.your_answer }}</li>
<!--            <li><hr></li>-->
        </ul>
        <h1 id="question">{{ question }}</h1>
        <section v-bind:style="info.style">
            <button class="answerButton" v-for="answer in answers" v-bind:key="answer.id" :style="answer.style"
                    v-on:click="checkAnswer(answer.id)" v-bind:disabled=answer.locked>{{
                answer.answer }}
            </button>
            <p id="score">Score: {{ scoreSum }}/{{questions.length}}</p>
            <p id="round">Fråga: {{ questionNumber }}/{{questions.length}}</p>
        </section>
        <button id="nextButton" @click="nextQuestion(questionNumber)" style="display: block" v-bind:style="next.style">Nästa
            fråga
        </button>
        <ul id="startButton" :style="start.style">
            <li><button class="start" @click="getQuestion(10)" v-bind:disabled=newGameLock>10 Frågor</button></li>
            <li><button class="start" @click="getQuestion(15)" v-bind:disabled=newGameLock>15 Frågor</button></li>
            <li><button class="start" @click="getQuestion(20)" v-bind:disabled=newGameLock>20 Frågor</button></li>
        </ul>
        <button id="resultButton" @click="showResult()" :style="result.style">Resultat</button>
        <!--        <timer></timer>-->
    </div>
</template>

<script>
    // import Timer from "./Timer";

    import Scoreboard from "./Scoreboard";
    export default {
        name: "Quiz",
        components: {
            Scoreboard
            // Timer
        },
        props: {
            // question: String,
            toggleShow: String,
            correct: Boolean
        },
        data: function () {
            return {
                answers: [
                    {id: 1, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB', display: 'none'}},
                    {id: 2, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB', display: 'none'}},
                    {id: 3, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB', display: 'none'}},
                    {id: 4, answer: '', correct: false, locked: false, style: {backgroundColor: '#3498DB', display: 'none'}}
                ],
                start: {lockButton: false, style: {display: 'inline'}},
                next: {lockButton: false, style: {display: 'none'}},
                resultScreen: {style: {display: 'none'}},
                result: {style: {display: 'none'}},
                // section: {style: {display: 'none'}},
                info: {style: {display: 'none'}},
                newGameLock: false,
                questionNumber: 0,
                questions: [],
                resultArr: [],
                question: '',
                scoreSum: 0
            }
        },
        methods: {
            getQuestion: function (n) {
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
                fetch('http://127.0.0.1:3000/api/questions/range/' + input)
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        let q = this.questions;
                        data.forEach(function (entry) {
                            // console.log(entry);
                            q.push(entry);
                        });
                        this.q = q;
                        // console.log(this.questions);
                        this.newGameLock = true;
                        this.start.style.display = 'none';
                        this.answers.forEach(function (entry) {
                            entry.style.display = 'initial'
                        });
                        this.next.style.display = 'initial';
                        this.info.style.display = 'grid';
                        this.nextQuestion(0);

                        // this.answers.forEach(function(entry){
                        //     entry.locked = false;
                        //     entry.correct = false;
                        //     entry.style.backgroundColor = '#ffffff';
                        // });
                        //
                        // this.question = data.question;
                        // let answerArray = [data.correct_answer, data.incorrect_answer[0], data.incorrect_answer[1], data.incorrect_answer[2]];
                        // answerArray.sort(() => Math.random() - 0.5);
                        // this.answers.forEach(function (entry) {
                        //     entry.answer = answerArray.pop();
                        //     if (entry.answer === data.correct_answer) {
                        //         entry.correct = true;
                        //     }
                        // });
                        // console.log(this.answers)
                    })
            },
            nextQuestion: function (i) {
                this.answers.forEach(function (entry) {
                    entry.locked = false;
                    entry.correct = false;
                    entry.style.backgroundColor = '#3498DB';
                });

                this.next.style.display = 'none';

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
                console.log(this.answers);
                this.questionNumber += 1
            },
            checkAnswer: function (id) {
                let i = id - 1,
                    q = this.question,
                    corrAns = this.questions[this.questionNumber - 1].correct_answer,
                    yourAns = this.answers[i].answer;
                // console.log(this.answers[i].correct);
                if (this.answers[i].correct === true) {
                    // this.answers[i].style.backgroundColor = '#32C832';
                    this.answers[i].style.backgroundColor = '#60BF6B';
                    this.scoreSum += 1
                } else {
                    this.answers[i].style.backgroundColor = '#ff3636';
                    this.answers.forEach(function (entry) {
                        if (entry.correct === true) {
                            // entry.style.backgroundColor = '#32C832';
                            entry.style.backgroundColor = '#60BF6B';
                        }
                    })
                }
                this.answers.forEach(function (entry) {
                    entry.locked = true
                });

                //result
                // console.log(q);
                // console.log(corrAns);
                // console.log(yourAns);
                this.resultArr.push({nr: this.questionNumber, question: q, correct_answer: corrAns, your_answer: yourAns});


                if (this.questionNumber < this.questions.length) {
                    this.next.style.display = 'initial';
                } else if (this.questionNumber >= this.questions.length) {
                    this.result.style.display = 'initial'
                }
                // if (this.questionNumber <= this.questions.length) {
                //     console.log('next');
                //     this.next.style.display = 'none'
                // }
            },
            showResult: function () {
                console.log(this.resultArr);
                this.answers.forEach(function (entry) {
                    entry.style.display = 'none'
                });
                this.next.style.display = 'none';
                this.info.style.display = 'none';
                this.question = '';
                this.result.style.display = 'none';
                this.resultScreen.style.display = 'grid';
            }
        }
    }
</script>

<style scoped>

    #quiz {
        /*background-color: rgb(230,230,230);*/
        height: auto;
        width: 800px;
        margin: auto;
        display: grid;
        /*grid-template-areas: "question" "next" "answers";*/
        /*grid-template-rows: 150px 250px auto 1fr;*/
        grid-template-rows: minmax(150px, auto) auto auto 1fr;
        /*grid-template-rows: 150px auto auto 1fr;*/
        /*background-image: url("../assets/logo.png");*/
    }

    #question {
        text-align: center;
        margin: auto 20px;
        color: #2c3e50;
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
    }

    .answerButton {
        width: 320px;
        font-size: 20px;
        color: white;
    }

    .answerButton:hover {
        background-color: #444444;
    }

    .start, #nextButton, #resultButton {
        width: 200px;
        /*background-color: white;*/
        background-color: #3498DB;
        color: white;
        font-size: 25px;
        font-style: italic;
        position: relative;

    }

    .start:hover, #nextButton:hover, #resultButton:hover {
        background-color: #2980B9;
    }

    li {
        list-style: none;
        padding-right: 10px;
    }

    #startButton li {
        display: inline;
    }

    #startButton {
        position: absolute;
        top: 325px;
        left: 250px;
        right: 250px;
        /*background: #8DFCC3;*/
        /*background: rgba(50,200,50,0.5);*/
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
        /*background-color: #3498DB;*/
        height: auto;
        margin-bottom: 25px;
    }

    ul li hr {
        margin-bottom: 25px;
        /*width: 750px;*/
    }

    #result {
        margin-top: 0;
        padding-left: 0;
        /*background-color: #3498DB;*/
    }

    #result li {
        padding-bottom: 0;
        font-size: 20px;
    }


</style>