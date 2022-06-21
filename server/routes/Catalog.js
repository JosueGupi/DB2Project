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
      requestTimeout: 300000,
      
      
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
      console.log("EXEC SP_SelectCatalog_G '"+idUser+"','"+location+"'")
      //query to the database and get the records
      request.query("EXEC SP_SelectCatalog_G '"+idUser+"','"+location+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          //sql.close();
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

app.post('/deleteShoppingCart', function (req, res) {

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
      request.query("EXEC SP_DeleteShoppingCartItem_O '"+name+"','"+idUser+"','"+location+"'", function (err, recordset) {

          if (err) console.log(err)
          // send records as a response 
          sql.close();
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

      const suscription = req.body.suscription
      const idUser = req.body.idUser
      const location = req.body.location
      console.log("EXEC SP_UpdateSuscription_G '"+location+"','"+suscription+"','"+idUser+"'")
      //query to the database and get the records
      request.query("EXEC SP_UpdateSuscription_G '"+location+"','"+suscription+"','"+idUser+"'", function (err, recordset) {
                 
          var nodemailer = require('nodemailer');
          const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: 'nigel.kessler71@ethereal.email',
                pass: 'rWt94pscGvnPmneM1x'
            }
          });
          console.log('sending an email..')  
          console.log(recordset)
          var currency = ''
          if (location == 'USA'){
            currency = ' Dollars'
          }
          if (location == 'Ireland'){
            currency = ' Euros'
          }
          if (location == 'Scotland'){
            currency = ' Sterling pounds'
          }    

          const email = recordset.recordset[0].email
          const username = recordset.recordset[0].username
          const price = recordset.recordset[0].price
          const subscription = recordset.recordset[0].subscription

          var mailOptions = {
            from: "Whisky",
            to: email,
            subject: "Update Subscription",
            text: "User: " + username +
                  "\n\n You have switched to subscription " + subscription 
                  + "\n\n\n Total: " + price + currency + "\n\n Thank you for your purchase."
          }
          transporter.sendMail(mailOptions,(error,info)=>{
            if (error){
              console.log(error.message)
            }
            else{
              console.log('WORKS!!!')
            }
          });

          if (err) console.log(err)

          // send records as a response 
          sql.close();
          res.json(recordset);
      });
  });
});

module.exports = app;