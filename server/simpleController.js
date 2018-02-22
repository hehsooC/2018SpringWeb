// creating a module
var express = require('express');
var app = express.Router();

module.exports = app
    .use(function(req, res, next){
        res.write('This is provided by Heh-Soo Choi at newpaltz.edu\r\n');
        next();
    })
// respond widdth "hello world" when a GET request is made to the homepage
// Routing: attach the path to get each message
    .get('/hello', function (req, res) {
        res.write('World');
        res.end();
        //res.send(); // will get different fonts 
    })
    .get('/goodbye', function (req, res) {
        res.write('New Paltz');
        res.end();

    });