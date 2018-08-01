import { Component, OnInit } from '@angular/core';
import  * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
    apiKey: "AIzaSyCAj-BO-1ltff9wkaFlnmgXTbUSCSPVu-c",
    authDomain: "myfood-b8020.firebaseapp.com",});
  }
  title = 'app';
  loadedFeature:string="recipe";
  onSelectedFeature(feature:string){
   this.loadedFeature=feature;
  }
}
