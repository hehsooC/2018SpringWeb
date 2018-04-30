import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MessagesService } from './messages.service';
import { User } from '../models/game';
import { Router } from '@angular/router';

@Injectable()
export class GameService {

  Me: User;
  // should be inside of Me
  token: string;
  pic: string;
  // first import these in constructor
  constructor(private http: Http, private _Messages: MessagesService, private _Router: Router) { 
  

  }

  login(name: string, password: string){
    if(password == '123'){
      // Log the User in
      this.Me = { Name: name, MyQuotes: [] };
      this._Router.navigate(['/game']);
    }
  }

  oAuthLogin(name: string, token: string, pic: string){
    this.Me = { Name: name, MyQuotes: [] };
    this.pic = pic;
    this.token = token;
    this._Router.navigate(['/game']);
  }
}
