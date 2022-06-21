const app = require('express').Router()

app.post('/createEmployee', function (req, res) {
    
    var mysql      = require('mysql2');
    var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'tutorial.2020',
    database : 'employeedata',
    port     : '23306'
    });

    // connect to your database
    connection.connect();
    
        

        // create Request object
    
    const country = req.body.country
    const idjob = req.body.idjob
    const firstName = req.body.fname
    const lastName = req.body.lname
    const dollarSallary = req.body.salary
    
    connection.query("CALL SP_CreateEmployee ('"+country+"',"+idjob+",'"+firstName+"','"+lastName+"',"+dollarSallary+")", function (error, results) {
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
    password : 'tutorial.2020',
    database : 'employeedata',
    port     : '23306'
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
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
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
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
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



app.post('/getRatings', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
  
      

      // create Request object
  
  
  connection.query("CALL SP_GetRatings_J ()", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});



app.post('/getComments', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
  const idTicket = req.body.idTicket
      

      // create Request object
  
  connection.query("CALL SP_GetConversation_J ("+idTicket+")", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

app.post('/addComments', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
  const idTicket = req.body.idTicket
  const user = req.body.user
  const comment = req.body.comment

      // create Request object
  
  connection.query("CALL SP_AddConversation_J ("+idTicket+",'"+user+"','"+comment+"')", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

app.post('/createEmployeeRating', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
 
  const saleID = req.body.saleID
  const user = req.body.user
  const commentsPreparation = req.body.commentsPreparation
  const commentsDelivery = req.body.commentsDelivery
  const ratingDelivery = req.body.ratingDelivery
  const ratingPreparation = req.body.ratingPreparation

  // create Request object
  console.log(req.body)
  
  connection.query("CALL SP_CreateEmployeeRating_G ("+saleID+",'"+user+"','"+commentsDelivery+"','"+commentsPreparation+"','"+ratingDelivery+"','"+ratingPreparation+"')", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

app.post('/getRatingsUser', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
  
  // create Request object
  
  const user = req.body.user
  
  connection.query("CALL SP_GetRatingsUser_G ('"+ user +"')", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

app.post('/insertDeliveryPreparat', function (req, res) {
    
  var mysql      = require('mysql2');
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tutorial.2020',
  database : 'employeedata',
  port     : '23306'
  });

  // connect to your database
  connection.connect();
  const idSale = req.body.idSale
  const location = req.body.location

  // create Request object
  console.log(req.body)
  
  connection.query("CALL SP_InsertDeliveryPreparat_G ("+idSale+",'"+location+"')", function (error, results) {
      if (error) throw error;
      res.json(results);
    });
     
  connection.end();
  // query to the database and get the records
});

module.exports = app;