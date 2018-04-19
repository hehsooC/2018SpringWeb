// creating a module
// including library
var express = require('express'); // common use of library in js
var Game = require('./model');

var app = express.Router(); // subrouter (controller)

var game = new Game();

// actions
module.exports = app
    //allows to log in with username
    .get('/quotes', (req, res) => res.send( game.GetQuotes(req.query.playerId) ) ) // getting a result, query string makes GET parameter to see same thing each other
    // refresh
    .get('/state', (req, res) => res.send( game ) )
    // flipping picture
    .post('/picture', (req, res) => res.send( game.FlipPicture() ) )
    // submitting quotes
    .post('/quotes', (req, res) => {
       // console.log("req.body is " + req.body.PlayerId); // now body is empty
        game.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send({ success: true });
        if(game.IsEveryoneDone()){
            console.log('work!');
            game.ChooseQuote(req.body.Text);
        }
 
         
    })// post a picture, state will be changed with a new picture 
    ; 
 
  

 
/*n
// without using 'class'
module.exports = app 
    .get('/quotes', (req, res) => res.send(Game.GetQuotes()));

*/
    
 