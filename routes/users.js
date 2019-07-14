var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(22222222)
  res.send({ data: 'respond with a resource'});
});

module.exports = router;
