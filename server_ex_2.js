var express = require('express');
var app = express();
var PORT = 8080;
 
// Multiple routing
var router1 = express.Router();
var router2 = express.Router();
    
router1.get('/user', function (req, res, next) {
    console.log("User Router Working");
    res.send("Hello USER");
});
 
router2.get('/student', function (req, res, next) {
    console.log("Student Router Working");
    res.send("Hello Student");
});

// Get : /user
// app.use(router1);

// Get : /student
// app.use(router2);

// OR
// Get : /api/user
app.use('/user', router1);

// // Get : /api/student
app.use('/api', router2);
  
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});