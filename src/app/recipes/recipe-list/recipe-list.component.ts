import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe-model';
import { RecipesService } from '../recipes.service';
import { Subscription } from '../../../../node_modules/rxjs';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipeSubscription:Subscription;
  recipes:Recipe[]=[]
  constructor(private recipeService:RecipesService) { }

  ngOnInit() {
    this.recipes=this.recipeService.getRecipes();
   this.recipeSubscription= this.recipeService.recipeWasUpdated.subscribe(
      (theRecipes:Recipe[])=>{
        this.recipes=theRecipes;
      }
    )
  }
  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }
}
