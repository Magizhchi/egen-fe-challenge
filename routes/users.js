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

router.post('/', function (req, res, next) {
    var newUser = req.body;

    console.log('Log is working');
    
    var callback = function (err) {
        if (err)
            res.send('Unable to Add User');
        else
            res.send('Added User');
    };
    
    user.add(newUser, callback())
});

module.exports = router;
