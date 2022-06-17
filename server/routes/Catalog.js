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

      const location = req.body.location
      const idUser = req.body.idUser

      //query to the database and get the records
      request.query("EXEC SP_SelectCatalog_G '"+idUser+"','"+location+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});

app.post('/addShoppingCart', function (req, res) {

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

      const name = req.body.name
      const idUser = req.body.idUser
      const location = req.body.location

      //query to the database and get the records
      request.query("EXEC SP_AddShoppingCart_G '"+name+"','"+idUser+"','"+location+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});

app.post('/getShoppingCart', function (req, res) {

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

      //query to the database and get the records
      request.query("EXEC SP_SelectShoppingCart_G '"+idUser+"','"+location+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});

module.exports = app;