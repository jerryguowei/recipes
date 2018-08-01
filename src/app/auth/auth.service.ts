import * as firebase  from 'firebase/app';
import 'firebase/auth';
import { Injectable } from '../../../node_modules/@angular/core';
import { Router } from '../../../node_modules/@angular/router';
@Injectable()
export class AuthService{
    constructor(private router:Router){

    }
    token:string
   signupUser(email:string,password:string){
       firebase.auth().createUserWithEmailAndPassword(email,password)
       .catch( error=>console.log(error)
       );
   }
   signinUser(email:string,password:string){
       firebase.auth().signInWithEmailAndPassword(email,password).then(
           (response)=>{
               console.log(response);
               firebase.auth().currentUser.getIdToken().then(
                   (token:string)=>{
                       this.token=token;
                   }
               )
               this.router.navigate(['/recipes']);
           }
       ).catch(
           (error)=>{
               console.log(error);
           }
       )
   }

   getToken(){
        firebase.auth().currentUser.getIdToken().then(
           (token:string)=>{
               this.token=token;
           }
       );
       return this.token;
   }
   isAuthenticated(){
       return this.token!=null;
   }
   logOut(){
       firebase.auth().signOut();
       this.token=null;
   }

}