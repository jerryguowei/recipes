import {Component, EventEmitter, Output} from '@angular/core'
import { RecipesService } from '../recipes/recipes.service';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from '../recipes/recipe-model';
@Component(
    {
        selector:'app-header',
        templateUrl:'./header.component.html'
    }
)

export class HeaderComponent{
    constructor(private dataStoreService:DataStorageService,private recipeService:RecipesService){}
    onSaveRecipes(){
        this.dataStoreService.storeRecipes().subscribe(
          (receipes)=>{
              console.log(receipes);
          }
        );
    }
    fetchRecipes(){
     this.dataStoreService.getRecipes().subscribe(
         (recipes:Recipe[])=>{
             this.recipeService.loadRecipes(recipes);
           }
        );
    }
}