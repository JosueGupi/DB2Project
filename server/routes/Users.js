const app = require('express').Router()

app.post('/login', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: '(#Pi9Vare1Xu!#)',
        server: 'localhost',
        database: 'DB_USA',
        port:1433,
        
        
        options: {
          encrypt: true, // for azure
          trustServerCertificate: true // change to true for local dev / self-signed certs
        }
      };

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
        const username = req.body.username
        const password = req.body.password

        // query to the database and get the records
        request.query("SELECT U.idUser, U.username, U.administrator, S.name, 'USA' as [Location] FROM DB_USA.dbo.Users U INNER JOIN DB_USA.dbo.Subscription S ON U.idSubscription = S.idSubscription WHERE username = '"+username+"' AND [password] = HASHBYTES('SHA2_256','"+password+"')", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});

module.exports = app;