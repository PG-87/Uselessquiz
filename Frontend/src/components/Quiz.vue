<template>
    <div id="quiz">
        <h1 id="question">{{ question }}</h1>
        <section>
            <button class="answerButton" v-for="answer in answers" v-bind:key="answer.id" :style="answer.style">{{
                answer.answer }}
            </button>
        </section>
        <button id="next" style="display: inline" onclick="toggleShow()">Next question</button>
        <button @click="getQuestion()">Ny fråga</button>
    </div>
</template>

<script>
    export default {
        name: "Quiz",
        props: {
            question: String,
            toggleShow: String,

        },
        data: function () {
            return {
                answers: [
                    {id: 1, answer: '', correct: false, style: {backgroundColor: '#ffffff'}},
                    {id: 2, answer: '', correct: false, style: {backgroundColor: '#ffffff'}},
                    {id: 3, answer: '', correct: false, style: {backgroundColor: '#ffffff'}},
                    {id: 4, answer: '', correct: false, style: {backgroundColor: '#ffffff'}}
                ]
            }
        },
        methods: {
            getQuestion: function() {
                fetch('http://127.0.0.1:3000/api/questions')
                    .then((response) => {
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data.results);
                        this.question = data.question;
                        let answerArray = [data.correct_answer, data.incorrect_answer[0], data.incorrect_answer[1], data.incorrect_answer[2]];
                        answerArray.sort(() => Math.random() - 0.5);
                        this.answers.forEach(function (entry) {
                            entry.answer = answerArray.pop();
                            if (entry.answer === data.correct_answer){
                                entry.correct = true;
                            }
                        });
                        console.log(this.answers)
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
        border-radius: 6px
    }

    #next {
        height: 70px;
        width: 150px;
        margin: auto auto 30px;
        border-radius: 10px
    }

</style>