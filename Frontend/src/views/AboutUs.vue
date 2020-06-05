<template>

        <div class="aboutUs" >
         <div  class = "heart" >
        </div>

        <h3>Vem är vi?</h3>
        <p>Vi är en grupp på fyra programmeringsstudenter, Christoffer, Nicklas, Partik, Tugba, <br>
            som ville utveckla sina kunskaper i HTML/CSS, node.js och Vue/Cli för ett projekt arbete.</p>
        <p >Vi hade det väldigt roligt när vi skapade UselessQuiz som en del av vår uppgift.</p>
        <h3>Målgrupp</h3>
        <p>Vi skapade UselessQuiz för dig som sitter i karantän, pluggar, lunchar på jobbet eller har allmänt tråkigt.</p>
        <p> Vi vill att alla ska ha ett roligt liv! <br>
        <h3>Vision</h3>
        <p>Alla ska vara vinnare av "Vem vet mest!" eller briljera på förfesten!</p>


        </div>

</template>

<script>
    export default {

    mounted() {
            this.$parent.footerPos = 'fixed';
    }
    }


</script>

<style scoped>

 .aboutUs {

     color: fuchsia;
 }
h3{
color: purple;
}


 @keyframes heartfade {
     0% {
         opacity : 1;
     }
     50% {
         opacity : 0;
     }
 }
 .heart {
     z-index : 999;
     animation : heartfade 6s linear;
     position : absolute;
 }
</style>
