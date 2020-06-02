<template>

        <div class="aboutUs" >
         <div  class = "heart" >
        </div>

        <h3>Vem är vi?</h3>
        <p>Vi är en grupp av fyra programmeringsstudenter, Christopher, Nicklas, Partick, Tugba, <br>
            som ville testa sina gränser för en vanlig läxa.</p>
        <p >Vi hade det väldigt roligt när vi skapade vi Useless Quiz som en del av vår uppgift.</p>
        <h3>Mission</h3>
        <p>Vi skapade Useless-Quiz för dig som tröttnade på karantän, studier, arbete eller liv.</p>
        <p> Vi vill att alla har det roligt med livet! <br>
        <h3>Vision</h3>
        <p>Alla ska vara vinnare av "Vem vet mest!</p>


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
