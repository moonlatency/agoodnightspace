var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('wtf');
  res.send('landing/login');
});

router.get('/register', function(req, res, next) {
  //res.render('wtf');
  res.send('register');
});

router.get('/home', function(req, res, next) {
  //res.render('wtf');
  res.send('home');
});

router.get('/search', function(req, res, next) {
  //res.render('wtf');
  res.send('search');
});
module.exports = router;
