var express = require('express'); 
var router = express.Router();

router.get('/', function (req, res) {
    console.log("GET: User Router Working");
    res.send("Get: Hello USER");
});

router.post('/', function (req, res) {
    console.log("POST: User Router Working");
    res.send("POST: Hello USER");
});

module.exports = router