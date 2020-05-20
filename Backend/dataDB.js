var sqlite3 = require('sqlite3').verbose()

const DBSOURCE = "userDB.db"


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


            }
        })
        db.run('CREATE TABLE Scoreboard (' +
            'id INTEGER PRIMARY KEY,' +
            'userId INTEGER,score TEXT,' +
            'datetime TEXT,question_amout TEXT)',(err) => {
            if (err) {
                // Table already created
            }else {
                // Table just created, creating some rows
                var insert2 = 'INSERT INTO Scoreboard (userId,score,datetime,question_amout) VALUES(?,?,?,?)'
                db.run(insert2, ["3", "100", "2020-01-01","10"])
                db.run(insert2, ["1", "200", "2020-01-01","20"])
                db.run(insert2, ["2", "300", "2020-01-01","15"])
                db.run(insert2, ["4", "150", "2020-01-01","10"])
                db.run(insert2, ["4", "600", "2020-01-01","20"])
                db.run(insert2, ["2", "500", "2020-01-01","15"])
                db.run(insert2, ["4", "256", "2020-01-01","10"])
                db.run(insert2, ["1", "199", "2020-01-01","15"])
                db.run(insert2, ["3", "899", "2020-01-01","20"])
                db.run(insert2, ["1", "123", "2020-01-01","10"])
                db.run(insert2, ["4", "456", "2020-01-01","15"])
                db.run(insert2, ["2", "235", "2020-01-01","15"])
                db.run(insert2, ["4", "654", "2020-01-01","10"])
                db.run(insert2, ["1", "10", "2020-01-01","15"])
                db.run(insert2, ["3", "50", "2020-01-01","20"])
                db.run(insert2, ["1", "11", "2020-01-01","10"])
                db.run(insert2, ["4", "16", "2020-01-01","15"])
                db.run(insert2, ["3", "100", "2020-01-01","10"])
                db.run(insert2, ["1", "200", "2020-01-01","20"])
                db.run(insert2, ["2", "300", "2020-01-01","15"])
                db.run(insert2, ["4", "150", "2020-01-01","10"])
                db.run(insert2, ["4", "600", "2020-01-01","20"])
                db.run(insert2, ["2", "500", "2020-01-01","15"])
                db.run(insert2, ["4", "256", "2020-01-01","10"])
                db.run(insert2, ["1", "199", "2020-01-01","15"])
                db.run(insert2, ["3", "899", "2020-01-01","20"])
                db.run(insert2, ["1", "123", "2020-01-01","10"])
                db.run(insert2, ["4", "456", "2020-01-01","15"])
                db.run(insert2, ["2", "235", "2020-01-01","15"])
                db.run(insert2, ["4", "654", "2020-01-01","10"])
                db.run(insert2, ["1", "10", "2020-01-01","15"])
                db.run(insert2, ["3", "50", "2020-01-01","20"])
                db.run(insert2, ["1", "11", "2020-01-01","10"])
                db.run(insert2, ["4", "16", "2020-01-01","15"])
            }
        })
    }
})


module.exports = db