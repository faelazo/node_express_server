var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.session.nombre){
    res.send('respond with a resource');
  }else{
    res.send('No hay sesión abierta');
  }
});

module.exports = router;
