<template>
    <div id="quiz">
        <h1 id="question">{{ question }}</h1>
        <section>
            <button class="answerButton" v-for="answer in answers" v-bind:key="answer.id" :style="answer.style"
                    v-on:click="checkAnswer(answer.id)" v-bind:disabled=answer.locked>{{
                answer.answer }}
            </button>
        </section>
        <button id="next" @click="nextQuestion(qNum)" style="display: block" v-bind:style="next.style">Next question</button>
        <button id="start" @click="getQuestion()" v-bind:disabled=newGameLock :style="start.style">10 Frågor</button>
        <p v-bind:style="next.style">Score: {{ scoreSum }}/{{questions.length}}</p>
        <!--        <timer></timer>-->
    </div>
</template>

<script>
    // import Timer from "./Timer";

    export default {
        name: "Quiz",
        components: {
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
                    {id: 1, answer: '', correct: false, locked: false, style: {backgroundColor: '#ffffff', display: 'none'}},
                    {id: 2, answer: '', correct: false, locked: false, style: {backgroundColor: '#ffffff', display: 'none'}},
                    {id: 3, answer: '', correct: false, locked: false, style: {backgroundColor: '#ffffff', display: 'none'}},
                    {id: 4, answer: '', correct: false, locked: false, style: {backgroundColor: '#ffffff', display: 'none'}}
                ],
                question: '',
                scoreSum: 0,
                questions: [],
                newGameLock: false,
                start: {id: 1, lockButton: false, style: {display: 'initial'}},
                next: {id: 1, lockButton: false, style: {display: 'none'}},
                qNum: 0
            }
        },
        methods: {
            getQuestion: function () {
                fetch('http://127.0.0.1:3000/api/questions/range/10')
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
                    entry.style.backgroundColor = '#ffffff';
                });

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
                this.qNum += 1
            },
            checkAnswer: function (id) {
                let i = id - 1;
                // console.log(this.answers[i].correct);
                if (this.answers[i].correct === true) {
                    this.answers[i].style.backgroundColor = '#8DFCC3';
                    this.scoreSum += 1
                } else {
                    this.answers[i].style.backgroundColor = '#ff3636';
                    this.answers.forEach(function (entry) {
                        if (entry.correct === true) {
                            entry.style.backgroundColor = '#8DFCC3';
                        }
                    })
                }
                this.answers.forEach(function (entry) {
                    entry.locked = true
                })
            }
        }
    }
</script>

<style scoped>

    #quiz {
        /*background-color: rgb(230,230,230);*/
        height: 500px;
        width: 800px;
        margin: auto;
        display: grid;
        grid-template-areas: "question" "next" "answers";
        grid-template-rows: 100px auto 100px;
    }

    #question {
        text-align: center;
        margin-top: 40px;
    }

    section {
        display: grid;
        grid-template-columns: 350px 350px;
        grid-template-rows: 100px 100px;
        margin: auto;
    }

    .answerButton {
        margin: auto;
        height: 70px;
        width: 320px;
        /*border-radius: 6px*/
    }

    #next {
        height: 70px;
        width: 150px;
        margin: auto auto 30px;
        /*border-radius: 10px*/
    }

    #start {
        height: 70px;
        width: 150px;
        margin: auto auto 30px;
        /*border-radius: 10px*/
    }

</style>