// creating a module
// including library
var express = require('express'); // common use of library in js
var Game = require('./model');

var app = express.Router(); // subrouter (controller)

var game = new Game();

// actions
module.exports = app
//allows to log in with username
.get('/quotes', (req, res) => 
    res.send( game.GetQuotes(req.query.playerId) ) ) // getting a result, query string makes GET parameter to see same thing each other
// refresh
.get('/state', (req, res) => res.send( game ) )
// flipping picture
.post('/picture', (req, res) => res.send( game.FlipPicture() ) )
// submitting quotes
.post('/quotes', (req, res) => {
    console.log(req.body);
    try{
        game.SubmitQuote(req.body.Text, req.body.PlayerId);
        res.send({ success: true });
    } catch(error){
        res.status(403).send({ success: false, message: error.message});
    }
})
.post('/quotes/choose', (req, res) => {
    if(req.body.PlayerId != game.DealerId){
        res.status(403).send({ success: false, message: "Only the dealer can choose a quote " });
    } else{
        game.ChooseQuote(req.body.Text);
        res.send( { success: true } );
    }
    
});
    

    // WHAT I DID
    // console.log("req.body is " + req.body.PlayerId); // now body is empty
    // if(req.body.PlayerId != req.body.DealerId)
        // game.SubmitQuote(req.body.Text, req.body.PlayerId);
        // res.send({ success: true });
    // if(req.body.PlayerId == req.body.DealerId){
    //      console.log('work!');
    //      game.ChooseQuote(req.body.Text); 
    //  }

       
     
  
    
// post a picture, state will be changed with a new picture 
// .post('/choose', (req, res) => {
//     console.log('work!'); 
//     game.ChooseQuote(req.body.Text); 
//     // if(game.IsEveryoneDone()){
//     //     console.log('work!');
//     //     game.ChooseQuote(req.body.Text); 
//     // }
// })
// .get('/choose', (req, res) => {
//     console.log('work!'); 
//     game.ChooseQuote(req.body.Text);  
//     // if(game.IsEveryoneDone()){
//     //     console.log('work!');
//     //     game.ChooseQuote(req.body.Text); 
//     // }
// })




/*n
// without using 'class'
module.exports = app 
.get('/quotes', (req, res) => res.send(Game.GetQuotes()));

*/

