import { Component, OnInit, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shipping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('formElement')  slForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editItemIndex:number;
  editItem:Ingredient
  constructor(private shoppingListService:ShoppingListService) { }

  ngOnInit() {
    this.subscription=this.shoppingListService.editedShoppingListItem.subscribe(
      (index:number)=>{
        this.editMode=true;
        this.editItemIndex=index;
        this.editItem=this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          'name':this.editItem.name,
          'amount':this.editItem.amount
        })
      }
    );
  }
  onSubmit(form:NgForm){
     const ingredient=new Ingredient(form.value.name,form.value.amount);
     if(this.editMode){
       this.shoppingListService.updateIngredient(this.editItemIndex,ingredient);
     }else{
      this.shoppingListService.addIngredient(ingredient);
     }
     this.editMode=false;
     this.slForm.reset();
  }
  onReset(){
    this.slForm.reset();
    this.editMode=false;
  }
  onDelete(){
    if(this.editMode){
      this.shoppingListService.deleteIngredient(this.editItemIndex);
      this.editMode=false;
    }
    this.slForm.reset();
  }

}
