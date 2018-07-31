import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shipping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients:Ingredient[]=[];
  ingreidentSubsciption:Subscription;
  constructor(private shoppingListService:ShoppingListService) { }
  ngOnInit() {
    this.ingredients=this.shoppingListService.getIngredients();
    this.ingreidentSubsciption=this.shoppingListService.ingredientGotChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    )
  }
  onClickToEdit(index:number){
    this.shoppingListService.editedShoppingListItem.next(index);
  }
  ngOnDestroy(){
    this.ingreidentSubsciption.unsubscribe();
  }

}
