var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "user.db"


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
    }else{
        console.log('Connected to the SQlite database.')
        db.run('CREATE TABLE USERS (' +
            'userId INTEGER PRIMARY KEY,' +
            'user TEXT,passCODE TEXT,' +
            'userEMAIL TEXT )',(err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO USERS (user,passCODE,userEMAIL) VALUES(?,?,?)'
                db.run(insert, ["Christoffer","1234","toffe@test.com"])
                db.run(insert, ["Tugba","1234","tugba@test.com"])
                db.run(insert, ["PG","1234","pg@test.com"])
                db.run(insert, ["Nicklas","1234","nicklas@test.com"])
                db.run(insert, ["Jerry","1234","Jerry@test.com"])


            }
        })
        db.run('CREATE TABLE Scoreboard (' +
            'id INTEGER PRIMARY KEY,' +
            'userId TEXT,score INTEGER,' +
            'datetime TEXT,question_amount TEXT)',(err) => {
            if (err) {
                // Table already created
            }else {
                // Table just created, creating some rows
                var insert2 = 'INSERT INTO Scoreboard (userId,score,datetime,question_amount) VALUES(?,?,?,?)'
                db.run(insert2, ["1", "10", "2020-01-01","15"])
                db.run(insert2, ["2", "20", "2020-01-01","20"])
                db.run(insert2, ["3", "30", "2020-01-01","10"])
                db.run(insert2, ["4", "40", "2020-01-01","15"])
                db.run(insert2, ["1", "10", "2020-01-01","10"])
                db.run(insert2, ["2", "20", "2020-01-01","15"])
                db.run(insert2, ["3", "30", "2020-01-01","15"])
                db.run(insert2, ["4", "40", "2020-01-01","20"])
                db.run(insert2, ["1", "20", "2020-01-01","15"])
                db.run(insert2, ["2", "30", "2020-01-01","20"])
                db.run(insert2, ["3", "40", "2020-01-01","10"])
                db.run(insert2, ["4", "50", "2020-01-01","20"])
                db.run(insert2, ["1", "30", "2020-01-01","10"])
                db.run(insert2, ["2", "40", "2020-01-01","15"])
                db.run(insert2, ["3", "50", "2020-01-01","20"])
                db.run(insert2, ["4", "60", "2020-01-01","20"])
                db.run(insert2, ["1", "99", "2020-01-01","10"])
                db.run(insert2, ["2", "89", "2020-01-01","15"])
                db.run(insert2, ["3", "79", "2020-01-01","20"])
                db.run(insert2, ["4", "50", "2020-01-01","10"])
                db.run(insert2, ["5", "50", "2020-01-01","15"])
                db.run(insert2, ["5", "20", "2020-01-01","10"])
                db.run(insert2, ["5", "20", "2020-01-01","20"])
            }
        })
    }
})


module.exports = db