<template>
    <div>
        <ul id="questions" v-for="question in questions" v-bind:key="question.id">
            <li v-on:click="showAnswer(question.id)" style="font-weight:bold; color:#2c3e50">{{question.Question}} <font-awesome-icon :icon="[ 'fas', 'angle-double-down' ]"
                                                                                                                                         v-if="!question.isSelected"/> </li>
            <li v-on:click="showAnswer(question.id)" v-show="question.isSelected">{{question.Answer}} <i class="fas fa-angle-double-up"></i></li>
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
                        Question: "Hur länge kommer mitt användarkonto att vara aktivt?",
                        Answer: "En registrering gäller livet ut, grattis!",
                        isSelected: false,
                    },
                    {
                        id: 2,
                        Question: "Vad ska jag göra om jag glömmer mitt lösenord?",
                        Answer: "Glöm inte! Detta är inte implementerat än!.",
                        isSelected: false,
                    },
                    {
                        id: 3,
                        Question: "Går det att fuska så jag vinner hela tiden?",
                        Answer: "Använd hjälplinan, "ring en vän".",
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
        },
        mounted() {
            this.$parent.footerPos = 'fixed';
        }
    }


</script>

<style scoped>

    #questions{
        list-style-type: none;
    }
    hr {
        width: 100%;
        margin-bottom: 27px;
        margin-top: 0;
        padding: 0;
    }

    #questions {
        margin-top: 0;
        padding-left: 0;
        padding-bottom: 10px;
    }

    #questions li {
        padding-bottom: 0;
        font-size: 20px;
        cursor: pointer;
    }

</style>
