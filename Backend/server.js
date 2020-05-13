var express = require("express");
var app = express();
var cors = require('cors');
var db = require("./dataDB.js");
var quizdb = require("./questions.json");

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
    let rnd=Math.floor(Math.random() * quizdb.questions.length);
    res.json(quizdb.questions[rnd])

});
app.get("/api/questions/:id", (req, res, next) => {
   console.log(quizdb.questions[req.params.id-1].correct_answer);
    res.json(quizdb.questions[req.params.id-1])
});

app.get("/api/questions/range/:number", (req, res, next) => {
    let numberArry = [];
    while (numberArry.length < req.params.number) {
        let rndnumber = Math.floor(Math.random() * quizdb.questions.length);
        if (!numberArry.includes(quizdb.questions[rndnumber])) {
        numberArry.push(quizdb.questions[rndnumber])
        }
    }
    res.json(numberArry)
});

app.get("/api/users", (req, res, next) => {
    var sql = "select userid,user from USERS"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json({
            "message":"success",
            "user":rows
        })
    });
});
app.post("/api/users/login", (req, res, next) => {
    var data ={
        pass:req.body.pass,
        user:req.body.user
    }
    var sql = "select userId,user,userEMAIL from USERS WHERE passCode = ? AND user = ?";
    var params = [req.body.pass,req.body.user];
     db.get(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json(rows);
    });
});