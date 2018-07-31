import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes/recipes.service";
import {map} from 'rxjs/operators'

@Injectable()
export class DataStorageService{
   constructor(private http:Http,private recipeService:RecipesService){

   }
  storeRecipes(){
     return this.http.put('https://myfood-b8020.firebaseio.com/receips.json'
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
      return this.http.get('https://myfood-b8020.firebaseio.com/receips.json').pipe(
          map((response:Response)=>{
              const data=response.json();
              return data;
          })
      )
  }
}