const mysql = require('mysql2'); 

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'banking'
  });

// connect to database
connection.connect(function(err){
  if (err) throw err
  console.log('You are now connected with mysql database...');
});

module.exports = connection;