<template>
    <div class="container">
        <div class="row">
            <h4 style="text-align:center">Vi skulle gärna höra från dig!</h4>
        </div>
        <div class="row input-container">
            <div class="col-xs-12">
                <div class="styled-input wide">
                    <input type="text" required />
                    <label>Namn</label>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="styled-input">
                    <input type="text" required />
                    <label>Email</label>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="styled-input wide">
                    <textarea required></textarea>
                    <label>Meddelande</label>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="btn-lrg submit-btn">Skicka Meddelande</div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style>
    body {
        background-color: lightgrey;
        padding-top: 10px;
    }



    h4 {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        font-weight: 200;
        font-size: 20px;
        color: darkslateblue;
        line-height: 1.5;
        alignment: center;
    }

    /* ///// inputs /////*/

    input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
        font-size: 0.2em;
        color: #999;
        top: -5px;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
    }

    .styled-input {
        float: left;
        width: 250px;
        margin: 1rem 0;
        position: relative;
        border-radius: 4px;
    }

    @media only screen and (max-width: 768px){
        .styled-input {
            width:100%;
        }
    }

    .styled-input label {
        color: #999;
        padding: 1.3rem 30px 1rem 30px;
        position: absolute;
        top: 10px;
        left: 0;
        -webkit-transition: all 0.25s ease;
        transition: all 0.25s ease;
        pointer-events: none;
    }

    .styled-input.wide {
        width: 250px;
        max-width: 100%;
    }

    input,
    textarea {
        padding: 30px;
        border: 0;
        width: 100%;
        font-size: 1rem;
        background-color: whitesmoke;
        color: black;
        border-radius: 4px;
    }

    input:focus,
    textarea:focus { outline: 0; }

    input:focus ~ span,
    textarea:focus ~ span {
        width: 100%;
        -webkit-transition: all 0.075s ease;
        transition: all 0.075s ease;
    }

    textarea {
        width: 100%;
        min-height: 10em;
    }

    .input-container {
        width: 250px;
        max-width: 100%;
        margin: 20px auto 25px auto;
    }

    .submit-btn {
        float: right;
        padding: 7px 35px;
        border-radius: 60px;
        display: inline-block;
        background-color: darkgray;
        color: darkslateblue;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.06),
        0 2px 10px 0 rgba(0,0,0,0.07);
        -webkit-transition: all 300ms ease;
        transition: all 300ms ease;
    }

    .submit-btn:hover {
        transform: translateY(1px);
        box-shadow: 0 1px 1px 0 rgba(0,0,0,0.10),
        0 1px 1px 0 rgba(0,0,0,0.09);
    }

    @media (max-width: 768px) {
        .submit-btn {
            width:100%;
            float: none;
            text-align:center;
        }
    }

    input[type=checkbox] + label {
        color: #ccc;
        font-style: italic;
    }

    input[type=checkbox]:checked + label {
        color: #f00;
        font-style: normal;
    }
</style>