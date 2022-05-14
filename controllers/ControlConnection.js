var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;

// Create connection to database
var config = {  
  server: 'localhost',  //update me
  authentication: {
      type: 'default',
      options: {
          userName: 'hoja', //update me
          password: '1234'  //update me
      }
  },
  options: {
      // If you are on Microsoft Azure, you need encryption:
      //encrypt: true,
      database: 'hoja',
      trustServerCertificate: true  //update me
  }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
  // If no error, then good to proceed.
  if(err){
  console.log("Connected err", err);
  }else{
    console.log('connected');
  }  
});



connection.connect();