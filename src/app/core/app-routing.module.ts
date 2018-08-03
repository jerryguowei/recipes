import { NgModule } from "@angular/core";

import { Routes, RouterModule} from '@angular/router';
import { AuthGuard } from "../auth/auth-guard.service";
const appRoutes: Routes =[
    {path:'',redirectTo:'signin',pathMatch:'full'}, 
    {path:'recipes',loadChildren:'../recipes/recipes.module#RecipesModule',canLoad:[AuthGuard]}
  
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