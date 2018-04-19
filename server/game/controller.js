// creating a module
// including library
var express = require('express'); // common use of library in js
var Game = require('./model');

var app = express.Router(); // subrouter (controller)

var game = new Game();

// actions
module.exports = app
    .get('/quotes', (req, res) => res.send( game.GetQuotes(req.query.playerId) ) ) // getting a result, query string makes GET parameter to see same thing each other
    .get('/state', (req, res) => res.send( game ) )
    .post('/picture', (req, res) => res.send( game.FlipPicture() ) )
    .post('/quotes', (req, res) => {
        console.log("req.body is " + req.body); // now body is empty
        game.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send({ success: true });
    })// post a picture, state will be changed with a new picture
    .post('/quotes', (req, res) =>{
        console.log("choosing quotes?");
        res.send( game.ChooseQuote(req.body.Text) )});



 
/*
// without using 'class'
module.exports = app
    .get('/quotes', (req, res) => res.send(Game.GetQuotes()));

*/
    
 