import { Component, OnInit } from '@angular/core';
import { Game, User, Quote } from '../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  // public variables
  Model = new Game();
  Me = new User();

  
  constructor() { 
    this.Me.Name = "Heh-Soo Choi"
  }

  ngOnInit() {

  }

  // e as event object
  submitQuote(e: MouseEvent, text: string){
    e.preventDefault(); // don't browser know what we are doing as default

    if(this.MyPlayedQuote()) return; // if this card is already played, return
    this.Model.PlayedQuotes.push({ Text: text, PlayerName: this.Me.Name, Chosen: false });
    this.Model.MyQuotes.splice( this.Model.MyQuotes.indexOf(text), 1 );

  }

  MyPlayedQuote(): Quote | null {
    return this.Model.PlayedQuotes.find( x => x.PlayerName == this.Me.Name ); // lambda production (fat arrow production); functional function programming)
  }

}
