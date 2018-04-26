import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // import Http interface

import { Game, User, Quote } from '../models/game';
import { MessagesService } from '../services/messages.service';
import { GameService } from '../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // public variables
  Model = new Game();     // state of game
  Me: User;
 
  private _api = "http://localhost:8080/game";

  //flippedPic: boolean = true;

  // get http client
  // 4/26 import game service, _Game: GameService
  constructor(
    private http: Http, 
    private _Messages: MessagesService, 
    private _Game: GameService, 
    private _Router: Router
  ) { 
    // reference Me to Game Service, it's pain to change every Me reference 
    this.Me = _Game.Me;
    if(!this.Me){
      _Router.navigate(['/login']);
    }
    this.join(this.Me.Name);

    setInterval(() => this.refresh(), 1000) 
  }


  ngOnInit() {

  }

  // refresh Model every time
  refresh(){
    this.http.get(this._api + "/state")
    .subscribe(data => this.Model = data.json());

  }

  flipPicture(e: MouseEvent) {
      this._Messages.Messages.push({Text: 'Picture Flipped', Type: 'success'});
      this.http.post(this._api + "/picture", {})
      .subscribe(); // have to call subscribe() 

    }


    
  
  // e as event object
  submitQuote(e: MouseEvent, text: string){
    this._Messages.Messages.push({Text: 'Quote Submitted: ' + text, Type: 'success'});
    e.preventDefault(); // don't browser know what we are doing as default (don't trigger the browser event)
     // if this card is already played, return (prevent submitting another quote)
     // if you are a dealer, prevent submitting quote
     // Use consistent logic
    if(this.MyPlayedQuote()||this.IAmTheDealer())
      return;
      
      // Truesy, Falsy in addition to boolean in ifstmt
      // False: undefined, 0, 0 length string, no return, false, no variable 
      // other than False, anything will be treated as True
    this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
        .subscribe( data=>{
          // this is passed to the body, we can omit if part
          if(data.json().success){
            // only get rid of your quote if it is a success
            this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 ); // remove the played quote in My Quotes
          }
    }, err=> {
      // this is passed to the header
          console.log(err);
    });

   // this.Model.PlayedQuotes.push({ Text: text, PlayerId: this.Me.Name, Chosen: false });

    
  }

  
/*   login(name: string){
    this._Messages.Messages.push({Text: 'You\'ve logged in. Welcome ' + name, Type: 'success'});
    this.http.get(this._api + "/quotes", { params : { playerId: name }})
    .subscribe(data=> this.Me = {Name: name, MyQuotes: data.json()})
  } */

  join(name: string){
    this._Messages.Messages.push({Text: 'You\'ve joined this game. Welcome ' + name, Type: 'success'});
    this.http.get(this._api + "/quotes", { params : { playerId: name }}) // pass id to server
    .subscribe(data=> this.Me.MyQuotes = data.json()) // now constructor will take local MyQuotes 
  }


  chooseQuote(e: MouseEvent, quote: Quote) {
    e.preventDefault();
    this.http.post(this._api + "/quotes/choose", {Text:quote.Text, PlayerId: this.Me.Name })
    .subscribe(data=> {
      },err=>{
        console.log(err);
      });
  }
  // MyPlayedQuote(): Quote | null {
  //   return this.Model.PlayedQuotes.find( x => x.PlayerName == this.Me.Name ); // lambda production (fat arrow production); functional function programming)
  // }

  // MyPlayedQuote as a functional lambda production
  // () function with 0 param.
  MyPlayedQuote = () => this.Model.PlayedQuotes.find( x => x.PlayerId == this.Me.Name );
  // it can be in Model
  ChosenQuote = () => this.Model.PlayedQuotes.find( x => x.Chosen );

  // everybody except the dealer played quotes
  //IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1; 
  
    IsEveryoneDone = () => this.Model.PlayedQuotes.length >= (this.Model.Players.length * .8) - 1; 

  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
  quoteSubmit = () => this.Model.PlayedQuotes.length == 0;
 
  // make choosequote()
}
