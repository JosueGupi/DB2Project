const app = require('express').Router()

app.post('/login', function (req, res) {

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
      request.query("EXEC SP_CreateAccount_G '"+name+"', '"+lastName+"', '"+email+"', '"+username+"', '"+password+"', '"+subscription+"', '"+country+"',"+is_admin, function (err, recordset) {

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
        
        var currency = ''
        if (country == 'usa'){
          currency = ' Dollars'
        }
        if (country == 'ireland'){
          currency = ' Euros'
        }
        if (country == 'scotland'){
          currency = ' Sterling pounds'
        }    
        
        const email = recordset.recordset[0].email
        const username = recordset.recordset[0].username
        const price = recordset.recordset[0].price
        const subscription = recordset.recordset[0].subscription

        var mailOptions = {
          from: "Whisky",
          to: email,
          subject: "Create Account",
          text: "User: " + username +
                "\n\n You have created an account with the subscription " + subscription 
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