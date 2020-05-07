<template>
    <div class="test">
    <h1>{{msg}}</h1>
    <p>
        Detta är enbart för test!
    </p>
    </div>
</template>

<script>
    export default {
        name: "testingcomp",
        props: {
            msg: String
        }
    }
</script>

<style scoped>

</style>