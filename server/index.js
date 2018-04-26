// 'node server/index.js' to run it
// localhost:8080/hello to see the server
// create a web server
// npm run server in terminal

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
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const game = require('./game/controller'); // import game controller

var app = express();

const servername = "localhost";
const port = 8080;



//app.use('./simpleController', simple).listen(port); 
// allow any header
app
  .use(bodyParser.json()) // return the function that does bodyparser, this is an initializer
  .use(bodyParser.urlencoded({ extended: false }))
  .use('/', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
  })
  .use('/', express.static(path.join(__dirname,"../dist/"))) // attaches everything '/', static() is a function returing a function
  .use('/simple', simple)
  .use('/game', game) // attach router to our file (mounted)
  .use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,"../dist/index.html"));
  })
  .listen(port);

console.log("running on http://" + servername + ": " + port);



/*
// app.use()
app.use(function(req, res, next){
    //res.write('This is provided by newpaltz.edu\r\n');
    res.write('This is provided by Heh-Soo Choi at newpaltz.edu\r\n');
    next();
});*/
// respond with "hello world" when a GET request is made to the homepage
// Routing: attach the path to get each message
/*
app.get('/hello', function (req, res) {
  res.write('World');
  res.end();
  //res.send(); // will get different fonts 
});
app.get('/goodbye', function (req, res) {
    res.write('New Paltz');
    res.end();

  });*/
// not gonna excute automatically, it needs a submit form
/* app.post('/goodbye', function (req, res) {
res.send('New Paltz')
}) */
/*app.listen(8080); */