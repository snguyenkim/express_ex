var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res, next) {
    console.log("GET: Student Router Working");
    res.send("GET: Hello STUDENT");
});

router.post('/', function (req, res, next) {
    console.log("POST: Student Router Working");
    res.send("POST: Hello STUDENT");
});

module.exports = router