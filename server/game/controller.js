// creating a module
// including library
var express = require('express'); // common use of library in js
var app = express.Router();

var Game = require('./model');
//var game = new Game();

module.exports = app
    .get('/quotes', (req, res) => res.send(Game.GetQuotes()));