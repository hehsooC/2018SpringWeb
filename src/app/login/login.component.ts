import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game:GameService) {

   }

  ngOnInit() {
  }

  // login delivers login info to service
  login(name: string, password: string ){
    this._Game.login(name, password);
    
  }

}
