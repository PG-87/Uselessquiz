<template>
    <div class ="login">
        <div class="login-screen">
            <div class="app-title">
            <h1>Sign up</h1>
            </div>

            <div class="login-form">
                <div class="control-group">
                    <input type="text"  v-model="RegName" class="login-field" value="" placeholder="användarnamn" id="signup-name">
                    <label class="login-field-icon fui-user" for="signup-name"></label>
                </div>

                <div class="control-group">
                    <input type="password"  v-model="RegPassword"  class="login-field" value="" placeholder="lösenord" id="signup-pass">
                    <label class="login-field-icon fui-lock" for="signup-pass"></label>
                </div>

                <div class="control-group">
                    <input type="email"  v-model="RegEmail" class="login-field" value="" placeholder="email" id="signup-mail">
                    <label class="login-field-icon fui-lock" for="signup-mail"></label>
                </div>

                <a class="btn btn-primary btn-large btn-block" @click="putData">Registrera dig</a>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data: function () {
            return {
                RegEmail: "",
                RegPassword: "",
                RegName: "",
            }

        },
        methods: {

            putData: async function () {
                // POST request using fetch with async/await
                const requestOptions = {
                    method: "PUT",
                    mode: 'cors',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({user: this.RegName, pass: this.RegPassword, email: this.RegEmail})
                };
                const response = await fetch("http://127.0.0.1:3000/api/new_user", requestOptions);
                const data = await response.json();
                console.log(data)
                alert("Tack för registret")


            }
        }

    }

</script>

<style>
    * {
        box-sizing: border-box;
    }

    *:focus {
        outline: none;
    }
    body {
        font-family: Arial;
        background-color: lightgrey;
        padding: 50px;
    }
    .login {
        margin: 20px auto;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .login-screen {
        background-color: #FFF;
        padding: 20px;
        border-radius: 5px;
        margin-right: 10px;

    }

    .app-title {
        text-align: center;
        color: #777;
    }

    .login-form {
        text-align: center;
    }
    .control-group {
        margin-bottom: 10px;
    }

    input {
        text-align: center;
        background-color: #ECF0F1;
        border: 2px solid transparent;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 200;
        padding: 10px 0;
        width: 250px;
        transition: border .5s;
    }

    input:focus {
        border: 2px solid #3498DB;
        box-shadow: none;
    }

    .btn {
        border: 2px solid transparent;
        background: #3498DB;
        color: #ffffff;
        font-size: 16px;
        line-height: 25px;
        padding: 10px 0;
        text-decoration: none;
        text-shadow: none;
        border-radius: 3px;
        box-shadow: none;
        transition: 0.25s;
        display: block;
        width: 250px;
        margin: 0 auto;
    }

    .btn:hover {
        background-color: #2980B9;
    }



</style>