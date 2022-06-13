const app = require('express').Router()

app.post('/get_catalog', function (req, res) {

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
      request.query("EXEC SP_SelectCatalog_G", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});


module.exports = app;