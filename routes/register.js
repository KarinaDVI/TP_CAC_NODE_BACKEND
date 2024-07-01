var express = require('express');
var router = express.Router();

const mysql = require('mysql');


router.get('/', function(req, res, next) {
    res.render('register', { title: 'Express'});
  });
  
  module.exports = router;