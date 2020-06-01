<template>
    <div>
        <ul id="questions" v-for="question in questions" v-bind:key="question.id">
            <li @click="showAnswer(question.id)" style="font-weight: bolder">{{question.Question}} + </li>
            <li v-show="question.isSelected">{{question.Answer}}</li>

        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {



                questions: [
                    {
                        id: 1,
                        Question: "Hur länge kommer mitt registration att vara aktiv?",
                        Answer: "Ett registration på U-Quiz varar ett år.",
                        isSelected: false,
                    },
                    {
                        id: 2,
                        Question: "Vad ska jag göra om jag glömmer min lösenord?",
                        Answer: "Glöm inte! We have no solution for this",
                        isSelected: false,
                    },
                    {
                        id: 3,
                        Question: "Hur kan jag vinna hela tiden?",
                        Answer: "Right click on the page, go to inspect button, you will see the file for questions and right answers",
                        isSelected: false,
                    }
                ]
            }
        },
        methods: {
            showAnswer: function (questionId) {
                if (this.questions[questionId - 1].isSelected)
                    this.questions[questionId - 1].isSelected = false;

                else
                {this.questions[questionId - 1].isSelected = true;}


                return this;
            },

            }


    }


</script>

<style scoped>

    #questions{
        list-style-type: none;
    }

</style>