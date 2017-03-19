var express    = require('express');
var router     = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ec2-user',
  password : 'sfhacks',
  database : 'ags_prod'
});

connection.connect(function(err){});

router.get('/increment-beds-occupied', function (req, res, next) {
  connection.query("update gs_beds_available set current_capacity = current_capacity + 1 where shelter_id = 1", function(err, results){
    connection.end();
  });
  res.send('Incremented occupied beds')
})

router.get('/decrement-beds-occupied', function (req, res, next) {
  connection.query("update gs_beds_available set current_capacity = current_capacity - 1 where shelter_id = 1", function(err, results){
    connection.end();
  });
  res.send('Decremented occupied beds')
})

module.exports = router;
