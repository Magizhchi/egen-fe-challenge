var express = require('express');
var router = express.Router();
var user = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var callback = function (err, users) {
    if (err)
        res.send("Error getting users");
    else
        res.send(users);
  }
  user.all(callback);
});

module.exports = router;
