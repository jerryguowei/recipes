import { Recipe } from "./recipe-model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { DataStorageService } from "../shared/data-storage.service";
@Injectable()
export class RecipesService{
    recipeSelected=new EventEmitter<Recipe>();
    recipeWasUpdated=new Subject<Recipe[]>();
    private recipes:Recipe[]=[ 
        new Recipe('Hamburger','test recipe',
                  'http://en.foodtravel.tv/datastore/recfood/873/Picture1873_normal.jpg',
                   [new Ingredient("meat",1),new Ingredient('cheese',5)]),
        new Recipe('Salad','another recipe',
         'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg',
          [new Ingredient('cucumber',5),new Ingredient('cheese',3)]),
      ];
      selectedId:number;
      getRecipes(){
          return this.recipes.slice();
      }
      getRecipe(index:number){
        return this.recipes[index];
    }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipeWasUpdated.next(this.recipes.slice());
    }
    updateRecipe(index:number,recipe:Recipe){
        this.recipes[index]=recipe;
        this.recipeWasUpdated.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipeWasUpdated.next(this.recipes.slice());
    }
    loadRecipes(recipes:Recipe[]){
        this.recipes=recipes;
        this.recipeWasUpdated.next(this.recipes.slice());
    }
}