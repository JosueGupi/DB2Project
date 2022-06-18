const app = require('express').Router()

app.post('/createReview', function (req, res) {

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
  
        const idUser = req.body.idUser
        const location = req.body.location
        const whisky = req.body.whisky
        const description = req.body.description
        
        //query to the database and get the records
        request.query("EXEC SP_CreateReview_G '"+idUser+"','"+location+"','"+whisky+"','"+description+"'", function (err, recordset) {
  
            if (err) console.log(err)
            // send records as a response 
            sql.close();
            res.json(recordset);
        });
    });
  });

  app.post('/selectReviews', function (req, res) {

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
        
        //query to the database and get the records
        request.query("EXEC SP_SelectReview_G ", function (err, recordset) {
  
            if (err) console.log(err)
            // send records as a response 
            sql.close();
            res.json(recordset);
        });
    });
  });
module.exports = app;