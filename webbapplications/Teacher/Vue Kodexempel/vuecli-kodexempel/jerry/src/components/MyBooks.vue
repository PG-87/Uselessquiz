<template>
    <div>
        <h2>Mina böcker</h2>
        <ul>
            <li v-for="book in books" v-bind:key="book.bokId">{{ book.bokTitel }} {{ book.bokForfattare }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyBooks",
        data: function(){
            return {
                books: [{
                    title: "hej"
                }]
            }
        },
        mounted(){
            fetch('http://127.0.0.1:3000/api/bok/')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data.bok);
                    this.books = data.bok;
                });
        }

    }
</script>

<style scoped>
    h2{
        font-family: Georgia, Helvetica, Arial, san-serif;
    }
</style>