import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // import Http interface

import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // public variables
  Model = new Game();     // state of game
  Me: User;
  //Player: Quote;
  private _api = "http://localhost:8080/game";

  // get http client
  constructor(private http: Http) { 
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
    if(this.IAmTheDealer() == true){
      this.http.post(this._api + "/picture", {})
      .subscribe(); // have to call subscribe() 
      
    }


    
  }
  // e as event object
  submitQuote(e: MouseEvent, text: string){
    e.preventDefault(); // don't browser know what we are doing as default (don't trigger the browser event)
    
    if(!this.IAmTheDealer() == true){
    // Truesy, Falsy in addition to boolean in ifstmt
      // False: undefined, 0, 0 length string, no return, false, no variable 
      // other than False, anything will be treated as True
      if(this.MyPlayedQuote()) return; // if this card is already played, return (prevent submitting another quote)
      this.http.post(this._api + "/quotes", { Text: text, PlayerId: this.Me.Name })
              .subscribe( data=>{
                if(data.json().success){
                  // only get rid of your quote if it is a success
                  this.Me.MyQuotes.splice( this.Me.MyQuotes.indexOf(text), 1 ); // remove the played quote in My Quotes

                }
              });
      this.Model.PlayedQuotes.push({ Text: text, PlayerId: this.Me.Name, Chosen: false });
    }


    
  }

  login(name: string){
    console.log("login executed");
    this.http.get(this._api + "/quotes", { params : { playerId: name }})
    .subscribe(data=> this.Me = {Name: name, MyQuotes: data.json()})
 

    
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
  IsEveryoneDone = () => this.Model.PlayedQuotes.length == this.Model.Players.length - 1; 
  
  IAmTheDealer = () => this.Me.Name == this.Model.DealerId;
 

}
