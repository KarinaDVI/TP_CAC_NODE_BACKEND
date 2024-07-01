var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/addshow/', function(req, res, next) {
  res.render('addshow', { title: 'Express'});
});

module.exports = router;