var express = require('express');
var app = express();

var port = 8080;

app.get('/sample/get/data', function(req, res) {
    console.log('receiving data ...');
    res.send("GET: This is example !!!");
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);