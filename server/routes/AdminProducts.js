const app = require('express').Router()

app.post('/createProduct', function (req, res) {

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
        const store = req.body.store
        const qty = req.body.qty
        const supplier = req.body.supplier
        const sub = req.body.idsub
        const name = req.body.name
        const aged = req.body.aged
        const type = req.body.type
        const img = req.body.file
        const price = req.body.price

        console.log(req.body)
        // query to the database and get the records
        
        request.query("EXEC SP_CreateProduct_J '"+country+"','"+store+"',"+qty+",'"+supplier+"',"+sub+",'"+name+"',"+aged+",'"+type+"','"+img+"',"+price, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});

app.post('/deleteProduct', function (req, res) {

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
        
        const name = req.body.pname
        
        console.log(req.body)
        // query to the database and get the records
        
        request.query("EXEC SP_DeleteProduct_J '"+country+"','"+name+"'", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            
            res.json(recordset);

        });
    });
});


module.exports = app;