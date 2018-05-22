var express = require('express');
var router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.nombre = 'Bartolo'
  res.render('index', { title: req.session.nombre });
});

module.exports = router;
