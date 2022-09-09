var express = require('express');
var router = express.Router();

var mysql = require('mysql')
var connection = mysql.createConnection({
  host :'localhost',
  user : 'root',
  password : '',
  database : 'st_tbl'
});

connection.connect(function(err){
  if(!err){
    console.log('Connected to database');
  }
  else{
    console.log('Failed to connect to database');
  }
});

router.get('/form', function(req, res, next){
  res.render('form');
});

router.post('/processing', function(req, res, next){
  console.log(req.body);
  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = "Recorded Added";
  connection.query("insert into st_tbl(st_name,st_gender) values(?, ?)", [a,b],
  function(err, result, field){
    res.render('ans', {mya:a, myb:b, myc:c});
  });
  
});


module.exports = router;
