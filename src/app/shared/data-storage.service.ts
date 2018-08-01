import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes/recipes.service";
import {map, catchError} from 'rxjs/operators'
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService{
   constructor(private http:Http,
               private recipeService:RecipesService,
               private authService:AuthService
              ){

   }
  storeRecipes(){
    const token=this.authService.getToken();
     return this.http.put('https://myfood-b8020.firebaseio.com/receips.json?auth='+token
     ,this.recipeService.getRecipes()).pipe(
         map(
             (response:Response)=>{
                 const data=response.json();
                 return data;
             }
         )
     );
  }
  getRecipes(){
      const token=this.authService.getToken();
      return this.http.get('https://myfood-b8020.firebaseio.com/receips.json?auth='+token).pipe(
          map((response:Response)=>{
              const data=response.json();
              return data;
          })
      )
  }
}