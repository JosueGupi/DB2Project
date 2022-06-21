const app = require('express').Router()

app.post('/generateSale', function (req, res) {

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
        const numberStore = req.body.numberStore
        const distance = req.body.distance
        //query to the database and get the records
        console.log("EXEC SP_GenerateSale_G '"+idUser+"','"+location+"','"+numberStore+"','"+distance+"'")
        request.query("EXEC SP_GenerateSale_G '"+idUser+"','"+location+"','"+numberStore+"','"+distance+"'", function (err, recordset) {
            
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
            if (location == 'USA'){
              currency = ' Dollars'
            }
            if (location == 'Ireland'){
              currency = ' Euros'
            }
            if (location == 'Scotland'){
              currency = ' Sterling pounds'
            }    

            var km = 0
            var shipping = 0 
            var priceXKm = 0
            console.log(recordset)
            const email = recordset.recordset[0].email  
            const dateS = recordset.recordset[0].date
            const idStore = recordset.recordset[0].idStore 
            const user = recordset.recordset[0].name[0] 
            const lastName = recordset.recordset[0].lastName
            const idUser = recordset.recordset[0].idUser
            priceXKm = recordset.recordset[0].priceXKm 
            km = recordset.recordset[0].km 

            shipping += (priceXKm * km)  
            var total = shipping
            var lines = ['id  Name  Qty Price\n ---------------------------\n']
            recordset.recordset.map((i) =>{ 
              lines.push(i.idWhisky + ' ' + i.name[1] + ' ' + i.quantity + ' ' + i.price + "\n" + '---------------------------\n')
              total += i.quantity * i.price
            })
            var mailOptions = {
              from: "Whisky",
              to: email,
              subject: "Sale Check",
              text: "Sale Check User: " + idUser + " " + user + " " + lastName +
                    "\n Store " + idStore + " " + location + "\n"
                    + "\nDate: "+ dateS + "\n\nDescription: \n" + lines + "\nShipping: " + shipping + currency
                    + "\nPrice per km:" + priceXKm + currency + " \nTotal kilometers: " + km 
                    + "\n\n\n Total: " + total + currency + "\n\n Thank you for your purchase."
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

app.post('/getStoreSale', function (req, res) {

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
        const latitude = req.body.latitude
        const lentgh = req.body.lentgh
        //query to the database and get the records
        request.query("EXEC SP_GetStore_G '"+location+"','"+idUser+"','"+latitude+"','"+lentgh+"'", function (err, recordset) {
            
            if (err) console.log(err)
            // send records as a response 
            sql.close();
            res.json(recordset);
        });
    });
  });

app.post('/setLocationUser', function (req, res) {

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
        const latitude = req.body.latitude
        const lentgh = req.body.lentgh
        
        //query to the database and get the records
        request.query("EXEC SP_SetLocationUser '"+location+"','"+idUser+"','"+latitude+"','"+lentgh+"'", function (err, recordset) {
  
            if (err) console.log(err)
            // send records as a response 
            sql.close();
            res.json(recordset);
        });
    });
  });

app.post('/selectSales', function (req, res) {

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
        request.query("EXEC SP_SelectSales_G '"+idUser+"','"+location+"'", function (err, recordset) {
  
            if (err) console.log(err)
            // send records as a response 
            
            res.json(recordset);
        });
    });
  });

  app.post('/selectSaleDescription', function (req, res) {

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
        const idSale = req.body.idSale
        //query to the database and get the records
        request.query("EXEC SP_SelectSaleDescription_G '"+idUser+"','"+location+"','"+idSale+"'", function (err, recordset) {
  
            if (err) console.log(err)
            // send records as a response 
            
            res.json(recordset);
        });
    });
  });

module.exports = app;