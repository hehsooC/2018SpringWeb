// 'node server/index.js' to run it

/* const flatten = require('array-flatten');

var myArr = [
    ["Hello", "world"],
    ["Good bye", "New Paltz"]
];

console.log(myArr); // display contents of maArr

var arr2 = flatten(myArr); // flatten 2 arrays as one in myArr

console.log(arr2);  */

/* // from w3schools.com
const http = require('http');

//create a server object: listening from a server and send back the message
const server = http.createServer(function(req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
});

server.listen(8080); //the server object listens on port 8080
console.log("Listening on http://localhost:8080"); // sent the message and receive the message */

// from expressjs.com
var express = require('express');
var app = express();

// app.use()
app.use(function(req, res, next){
    //res.write('This is provided by newpaltz.edu\r\n');
    next();
});
// respond with "hello world" when a GET request is made to the homepage
// Routing: attach the path to get each message
app.get('/hello', function (req, res) {
  res.write('World');
  res.end();
  //res.send(); // will get different fonts 
});
app.get('/goodbye', function (req, res) {
    res.write('New Paltz');
    res.end();

  });

// not gonna excute automatically, it needs a submit form
/* app.post('/goodbye', function (req, res) {
res.send('New Paltz')
}) */

app.listen(8080);