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
        request.query("EXEC SP_Login_J '"+username+"','"+password+"'", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});

app.post('/create_account', function (req, res) {

  var sql = require("mssql");

  // config for your database
  var config = {
      user: '',
      password: '',
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
      const lastName = req.body.lastName
      const email = req.body.email
      const username = req.body.username
      const password = req.body.password
      const subscription = req.body.subscription
      const country = req.body.country
      let is_admin = 0

      if (Boolean(req.body.administrator)){
        is_admin = 1
      } 

      //query to the database and get the records
      request.query("EXEC SP_CreateAccount_G '"+name+"', '"+lastName+"', '"+email+"', '"+username+"', '"+password+"', '"+subscription+"', '"+country+"', '"+is_admin+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});


module.exports = app;