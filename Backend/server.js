var express = require("express");
var app = express();
var cors = require('cors');
//var db = require("./users.js");
var questions = require("./questions.json");

app.use(cors());
app.use(express.static('public'));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 3000;

//Start the server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port: " + HTTP_PORT);
});

app.get("/api/questions", (req, res, next) => {
    res.send("HEJ")
})