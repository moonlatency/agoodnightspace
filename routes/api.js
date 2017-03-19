var express    = require('express');
var router     = express.Router();
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'ec2-user',
  password : 'sfhacks17',
  database : 'ags_prod'
});

connection.connect(function(err){});

router.get('/increment-beds-occupied', function (req, res, next) {
  let sid = req.param('sid')
  debugger;
  connection.query(`update gs_beds_available set current_capacity = current_capacity + 1 where shelter_id = ${sid}`, function(err, results){
    connection.end();
  });
  res.send('Incremented occupied beds')
})

router.get('/decrement-beds-occupied', function (req, res, next) {
  let sid = req.param('sid')
  connection.query(`update gs_beds_available set current_capacity = current_capacity - 1 where shelter_id = ${sid}`, function(err, results){
    connection.end();
  });
  res.send('Decremented occupied beds')
})

router.get('/beds-available', function (req, res, next) {
  connection.query(`select \
                      s.shelter_id, \
                      s.name, \
                      s.max_capacity - ba.current_capacity as beds_available, \
                      sf.lgbtq_friendly, \
                      sf.shower_available, \
                      sf.women_only, \
                      sf.men_only, \
                      sf.allows_families \
                   from \
                      gs_shelters s \
                      join gs_beds_available ba on s.shelter_id = ba.shelter_id \
                      join gs_shelter_filters sf on s.shelter_id = sf.shelter_id;`, function(err, results){
    var the_thing = JSON.stringify(results)
    console.log(the_thing)
    res.setHeader('Content-Type', 'application/json');
    res.send(the_thing)
    connection.end();
  });
})

module.exports = router;
