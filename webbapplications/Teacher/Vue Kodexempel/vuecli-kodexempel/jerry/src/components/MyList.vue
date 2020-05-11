<template>
    <div>
        <h2>Min lista</h2>
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <ul>
            <li v-for="post in posts" v-bind:key="post.id">{{ post.title }} {{ post.content }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MyList",
        data: function(){
            return {
            posts: [
                { id: 1, title: 'Jerry', content: 'My jorney .....' },
                { id: 2, title: 'Blogging with Vue', content: 'Blogging ......' },
                { id: 3, title: 'Why Vue is so fun', content: 'Why Vue .....' }
            ]
            }
        }
    }
</script>

<style scoped>
h2{
    font-family: Georgia, Helvetica, Arial, san-serif;
}
</style>