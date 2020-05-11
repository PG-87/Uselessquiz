<template>
    <div class="test">
        <h1>testsidan</h1>
        <ul>
            <li v-for="result in results" v-bind:key="result.question">{{result.type}}</li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "testingcomp",
        data: function () {
            return {
                results: []
            }
        },
        mounted() {
            fetch('http://127.0.0.1:3000/api/questions')
            .then((response) => {
                return response.json();
            })
                .then((data) => {
                    console.log(data.results);
                    this.results = data.results;
                })
        }
    }
</script>

<style scoped>

</style>