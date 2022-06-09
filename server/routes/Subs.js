const app = require('express').Router()

app.post('/changeSubs', function (req, res) {

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
        const country = req.body.country
        const sub = req.body.level
        const price = req.body.price
        
        
        // query to the database and get the records
        request.query("EXEC SP_ChangeSub_J '"+country+"','"+sub+"',"+price, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});

module.exports = app;