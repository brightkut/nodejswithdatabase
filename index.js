// import
var mysql = require('mysql');

//create connection
var con = mysql.createConnection({

  host: "localhost",
  user: "root",
  password: "bright356" ,
  port: 3306,
  database: "sampledatabase"


});


// connect DB

con.connect(function(error){

  if(error) throw error ;

  console.log("Connected!");


  //create function insert
  function insert(n,s){
    // insert query
    sqlinsert = 'insert into user (name,surname) values ?';
    var values = [[n,s]];
    con.query(sqlinsert,[values], function(error,result){

      if (error) throw error;
      console.log("Insert complete by name : "+n+" surname: "+s);
    });
  }

  function selectAll(){
    sqlselect = 'select * from user';
    con.query(sqlselect,function(error,result){

      if (error) throw error;
      console.log(result);
    });
    con.end();
  }



  //call function insert and add values by parameter
  insert('Bob','TONY');
  //call function select
  selectAll();











});
