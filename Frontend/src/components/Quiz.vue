<template>
    <div id="quiz">
        <h1 id="question">{{ question }}</h1>
        <section>
            <button class="answerButton" v-for="answer in answers" v-bind:key="answer.id" :style="answer.style">{{ answer.answer }}</button>
        </section>
        <button id="next" style="display: inline" onclick="toggleShow()">Next question</button>
    </div>
</template>

<script>
    export default {
        name: "Quiz",
        props: {
            question: String,
            toggleShow: String
        },
        data: function () {
            return {
                answers: [
                    {id: 1, answer: 'Placeholder', style: {backgroundColor: '#ffffff'}},
                    {id: 2, answer: 'Placeholder', style: {backgroundColor: '#ffffff'}},
                    {id: 3, answer: 'Placeholder', style: {backgroundColor: '#ffffff'}},
                    {id: 4, answer: 'Placeholder', style: {backgroundColor: '#ffffff'}}
                ]
            }
        },
        mounted() {
            fetch('http://127.0.0.1:3000/api/questions')
            .then((response) => {
                return response.json()
            })
                .then((data) => {
                    console.log(data.results);
                    this.results = data.results
                })
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