import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { SelectRecipeComponent } from "./select-recipe/select-recipe.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";
const recipesRoutes: Routes = [
    {
        path: '', component: RecipesComponent, children: [
            { path: '', component: SelectRecipeComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id/edit', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
        ], canActivate: [AuthGuard]

    }];

@NgModule(
    {
       imports:[RouterModule.forChild(recipesRoutes)],
       exports:[RouterModule]
    }
)
export class RecipesRoutingModule{}