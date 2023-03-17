var express = require('express');
var app = express();
var PORT = 8080;
 
// Multiple routing
const userRoutes = require('./routes/user/user-routes.js');
const studentRoutes = require('./routes/student/student-routes.js');

// endpoint: /user
app.use('/user', userRoutes);

// endpoint: /student
app.use('/student', studentRoutes);

// OR

// endpoint: /api-user
// app.use('/api-user', userRoutes);

// endpoint: /std
// app.use('/std', studentRoutes);

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});