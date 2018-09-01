import { Component, OnInit } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  currPath = "recipes";

  activePath(path: string){
    this.currPath = path;
  }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAPQGAXwsLifPhE6ui_N3GVkOXF6cwBVWI",
      authDomain: "udemy-recipes-26c8a.firebaseapp.com"
    })
    /* TODO check for token on app startup */
  }

}
