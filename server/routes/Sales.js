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
        console.log("EXEC SP_GenerateSale_G '"+idUser+"','"+location+"','"+numberStore+"','"+distance+"'")
        //query to the database and get the records
        request.query("EXEC SP_GenerateSale_G '"+idUser+"','"+location+"','"+numberStore+"','"+distance+"'", function (err, recordset) {
  
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
        console.log("EXEC SP_GetStore_G '"+location+"','"+idUser+"','"+latitude+"','"+lentgh+"'")
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

module.exports = app;