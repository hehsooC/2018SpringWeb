import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

//declare var window: Window & { onGoogleYoloLoad: Function };
declare var googleyolo: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game:GameService) {
   /*  window.onGoogleYoloLoad = (googleyolo: any) => {
      // The 'googleyolo' object is ready for use.
    }; */
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com",
       // "googleyolo://id-and-password"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "224672501632-b59a192aifnt8s107nllt1kdognsjejv.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      _Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
   }

  ngOnInit() {
  }

  // login delivers login info to service
  login(name: string, password: string ){
    this._Game.login(name, password);
    
  }

}
