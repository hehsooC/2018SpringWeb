// creating a module
// including library
var express = require('express'); // common use of library in js
var Game = require('./model');

var app = express.Router(); // subrouter (controller)

var game = new Game();

module.exports = app
    .get('/quotes', (req, res) => res.send( game.GetQuotes() ) ) // getting a result
    .get('/state', (req, res) => res.send( game ) )
    .post('/picture', (req, res) => res.send( game.FlipPicture() ) ); // post a picture, state will be changed with a new picture



/*
// without using 'class'
module.exports = app
    .get('/quotes', (req, res) => res.send(Game.GetQuotes()));

*/
    