const app = require('express').Router()

app.post('/createEmployee', function (req, res) {
    
    var mysql      = require('mysql2');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Pi9Vare1Xu',
    database : 'employeedata',
    });

    // connect to your database
    connection.connect();
    
        

        // create Request object
    
    const country = req.body.country
    const idjob = req.body.idjob
    const firstName = req.body.fname
    const lastName = req.body.lname
    const dollarSallary = req.body.salary
    
    connection.query("CALL SP_CreateEmployee_J ('"+country+"',"+idjob+",'"+firstName+"','"+lastName+"',"+dollarSallary+")", function (error, results) {
        if (error) throw error;
        
        res.json(results);
      });
       
    connection.end();
    // query to the database and get the records
});

app.post('/deleteEmployee', function (req, res) {
    
    var mysql      = require('mysql2');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Pi9Vare1Xu',
    database : 'employeedata',
    });

    // connect to your database
    connection.connect();
    
    
    const idEmployee = req.body.idEmployee
    
    
    connection.query("CALL SP_DeleteEmployee_J ("+idEmployee+")", function (error, results) {
        if (error) throw error;
        
        res.json(results);
      });
       
    connection.end();
    // query to the database and get the records
});

app.post('/readEmployee', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pi9Vare1Xu',
  database : 'employeedata',
  });

  // connect to your database
  connection.connect();
  
  
  const idEmployee = req.body.idEmployee
  
  
  connection.query("CALL SP_ReadEmployee_J ("+idEmployee+")", function (error, results) {
      if (error) throw error;
      console.log(results[0][0]);
      res.json(results[0][0]);
    });
     
  connection.end();
  // query to the database and get the records
});

app.post('/updateEmployee', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Pi9Vare1Xu',
  database : 'employeedata',
  });

  // connect to your database
  connection.connect();
  
      

      // create Request object
  const idEmployee = req.body.idEmployee
  const country = req.body.country == 'No change' ? 'NULL' : "'"+req.body.country+"'"
  const idjob = req.body.idjob == 0 ? 'NULL' : req.body.idjob
  const firstName = req.body.fname == '' ? 'NULL' : "'"+req.body.fname+"'"
  const lastName = req.body.lname == '' ? 'NULL' : "'"+req.body.lname+"'"
  const dollarSallary = req.body.salary
  console.log(req.body)
  
  connection.query("CALL SP_UpdateEmployee_J ("+idEmployee+","+country+","+idjob+","+firstName+","+lastName+","+dollarSallary+")", function (error, results) {
      if (error) throw error;
      
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

module.exports = app;