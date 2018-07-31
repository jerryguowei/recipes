import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe-model';
import { ShoppingListService } from '../../shopping-list/shipping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe
  id:number;
  constructor(private shoppingListService:ShoppingListService,
              private recipeService:RecipesService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
     (params:Params)=>{
       this.id=+params['id'];
       this.recipe=this.recipeService.getRecipe(+params['id']);
     }
    );
  }
  onAddToShoppingList(){
      this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
  onDeleteRecipe(){
  this.recipeService.deleteRecipe(this.id);
  this.router.navigate(['../'],{relativeTo:this.route});
  }

}
