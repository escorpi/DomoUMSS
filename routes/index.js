var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Domo' });
});

/**router.get('/sensores', function(req, res) {
  res.render('sensores', { title: 'Express' });
});*/


module.exports = router;
