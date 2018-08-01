import { NgModule, Component } from "@angular/core";

import { Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { SelectRecipeComponent } from "./recipes/select-recipe/select-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes =[
    {path:'',redirectTo:'recipes',pathMatch:'full'},
    {path: 'recipes', component:RecipesComponent,children:[
      {path:'',component:SelectRecipeComponent},
      {path:'new',component:RecipeEditComponent},
      {path:':id/edit',component:RecipeEditComponent},
      {path:':id',component:RecipeDetailComponent},
    ],canActivate:[AuthGuard]
  
  },
    {path: 'shopping-list',component:ShoppingListComponent,canActivate:[AuthGuard]},
    {path:'signup',component:SignupComponent},
    {path:'signin',component:SigninComponent},
];

@NgModule({
    imports:[
      RouterModule.forRoot(appRoutes)
    ],
    exports:[
      RouterModule
    ]
})

export class AppRoutingMoudule{



}