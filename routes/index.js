var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(22222)
  res.send('fsdfsd')
});

module.exports = router;
