const app = require('express').Router()

app.post('/changeSubs', function (req, res) {

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

app.post('/updateSuscription', function (req, res) {

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
      const sub = req.body.level
      const idUser = req.body.idUser
      
      
      // query to the database and get the records
      request.query("EXEC SP_UpdateSuscription_G '"+country+"','"+sub+"',"+idUser, function (err, recordset) {

          if (err) console.log(err)

          // send records as a response
          
          res.json(recordset);

      });
  });
});

module.exports = app;