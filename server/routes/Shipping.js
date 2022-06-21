const app = require('express').Router()

app.post('/changeShipping', function (req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'Geisel',
        password: 'Rosado1010',
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
        const country = req.body.country
        const price = req.body.price
        
        
        
        // query to the database and get the records
        request.query("EXEC SP_ChangeShipping_J '"+country+"',"+price, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});

module.exports = app;