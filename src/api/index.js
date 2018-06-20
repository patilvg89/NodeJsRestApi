var express = require('express');
var router = express.Router();


// http://localhost:3000/
router.get('/', function (req, res, next) {
    res.status(200)
        .json({
            status: 'success',
            message: 'Server is running'
        });
});


//////////////////////
// Postgres queries
//////////////////////

var db = require('./queries');

router.post('/api/register', db.register);
router.get('/api/login', db.login);

module.exports = router;
