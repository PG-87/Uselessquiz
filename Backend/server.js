//<editor-fold desc="Dependices and basic settings">
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
//</editor-fold>

//Start the server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port: " + HTTP_PORT);
});

//<editor-fold desc="Questions handle">
app.get("/api/questions", (req, res, next) => {
    let rnd=Math.floor(Math.random() * quizdb.questions.length);
    res.json(quizdb.questions[rnd])

});
app.get("/api/questions/:id", (req, res, next) => {
   //console.log(quizdb.questions[req.params.id-1].correct_answer);
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
//</editor-fold>


//<editor-fold desc="User handle">
app.put("/api/new_user", (req, res, next) => {
    var txt ={
            user:req.body.user,
            pass:req.body.pass,
            email:req.body.email
    }
    var txtdata=req.body.email.toString()
    txtdata=txtdata.toLowerCase()
    txtdata=[txtdata]
    txtdata.push(req.body.user.toString())
    var sql = "select userid from USERS where userEMAIL = ? OR user = ?"
    var params = txtdata
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        if (rows.length === 1) {
        res.json({
            "Message":"User already exists"
            })

        }else{
            insert = "INSERT INTO USERS (user,passCODE,userEMAIL) VALUES(?,?,?)"
            db.run(insert,[req.body.user,req.body.pass,txtdata[0]])
            sql = "select userid from USERS where userEMAIL = ?"
            params = [txtdata]
            db.all(sql, params, (err2,rows2) => {
                res.json(rows2);
            });

        }
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
//</editor-fold>

//<editor-fold desc="Scoreboard handle">
app.get("/api/scores/:number", (req, res, next) => {
        var sql = "SELECT USERS.user,MAX(CAST(Scoreboard.score as INTEGER)) as Score,Scoreboard.datetime,Scoreboard.question_amount " +
            "FROM Scoreboard JOIN USERS ON Scoreboard.userId=USERS.userId WHERE Scoreboard.question_amount ="+ req.params.number +" "+
            "GROUP BY USERS.user " +
            "ORDER BY Scoreboard.score DESC " +
            "LIMIT 5; "
        db.all(sql,(err, rows) => {
            if (err) {
                res.status(400).json({"error":err.message});
                return;
            }
            res.json(rows);
        });
})
app.get("/api/scores/:number/:id", (req, res, next) => {
    var sql = "SELECT USERS.user,Scoreboard.score as Score,Scoreboard.datetime,Scoreboard.question_amount " +
        "FROM Scoreboard JOIN USERS ON Scoreboard.userId=USERS.userId " +
        "WHERE Scoreboard.question_amount ="+ req.params.number +" AND USERS.userId ="+ req.params.id +" " +
        "ORDER BY Score DESC LIMIT 5; "
    db.all(sql,(err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message});
            return;
        }
        res.json(rows);
    });
})
app.put("/api/addscore", (req, res, next) => {
    var txt ={
        userId:req.body.userid,
        score:req.body.score,
        questionAmount:req.body.question_amount
    }
        var date=new Date();
            insert = "INSERT INTO Scoreboard (userId,score,datetime,question_amount) VALUES(?,?,?,?)"
            db.run(insert,[req.body.userId,req.body.score,date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate(),req.body.questionAmount])
            res.status(200).json({"Message":"ok"});
})
//</editor-fold>



