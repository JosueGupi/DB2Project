const app = require('express').Router()

app.post('/createProduct', function (req, res) {

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
        const store = req.body.store
        const qty = req.body.qty
        const supplier = req.body.supplier
        const sub = req.body.idsub
        const name = req.body.name
        const aged = req.body.aged
        const type = req.body.type
        const img = "DECLARE @img VARBINARY(MAX) = (SELECT BulkColumn FROM OPENROWSET(BULK 'C:\\"+req.body.file+"',SINGLE_BLOB) AS Imagen);"
        const price = req.body.price
        const q = img + "EXEC SP_CreateProduct_J '"+country+"','"+store+"',"+qty+",'"+supplier+"',"+sub+",'"+name+"',"+aged+",'"+type+"',@img,"+price
        
        // query to the database and get the records
        
        request.query(q, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
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

            
            var cont = 0;

            while(cont <recordset.recordsets[1].length){
              var email = recordset.recordsets[1][cont].email;
              console.log(email)
              var product = recordset.recordsets[1][cont].product;
              var mailOptions = {
                from: "Whisky",
                to: email,
                subject: "New Product",
                text: "The new "+ product+" has arrived to our stores"
              }
              transporter.sendMail(mailOptions,(error,info)=>{
                if (error){
                  console.log(error.message)
                }
                else{
                  console.log('WORKS!!!')
                }
              });
              

              cont++;
            }


            res.json(recordset);

        });
    });
});

app.post('/deleteProduct', function (req, res) {

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


app.post('/readProduct', function (req, res) {

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
        
        const name = req.body.pname
        
        console.log(req.body)
        // query to the database and get the records
        
        request.query("EXEC SP_ReadProduct_J '"+country+"','"+name+"'", function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.json(recordset);

        });
    });
});
app.post('/updateProduct', function (req, res) {

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
        const store = req.body.store
        const qty = req.body.qty
        const supplier = req.body.supplier == '' ? 'NULL' : "'"+req.body.supplier+"'"
        const sub = req.body.sub == 0 ? 'NULL' : req.body.sub
        const name = req.body.pname == '' ? 'NULL' : "'"+req.body.pname+"'"
        const aged = req.body.aged
        const price = req.body.price
        const whiskyId = req.body.wID
        const type = req.body.type == '' ? 'NULL' : "'"+req.body.type+"'"
        const file = req.body.file == '' ? 'DECLARE @img VARBINARY(MAX) = NULL;' : "DECLARE @img VARBINARY(MAX) = (SELECT BulkColumn FROM OPENROWSET(BULK 'C:\\"+req.body.file+"',SINGLE_BLOB) AS Imagen);"
        const q = file + "EXEC SP_UpdateProduct_J '"+country+"','"+store+"',"+qty+","+supplier+","+sub+","+name+","+aged+","+type+",@img,"+price+","+whiskyId
        console.log(q)
        // query to the database and get the records
        
        request.query(q, function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            console.log(recordset)
            res.json(recordset);

        });
    });
});

module.exports = app;