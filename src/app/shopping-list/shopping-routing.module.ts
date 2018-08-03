import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth-guard.service";
import { ShoppingListComponent } from "./shopping-list.component";
const ShoppingRoute:Routes=[
    {path: 'shopping-list',component:ShoppingListComponent,canActivate:[AuthGuard]}
];

@NgModule(
    {
       imports:[
           RouterModule.forChild(ShoppingRoute),
       ],
        exports:[RouterModule]
    }
)

export class ShoppingRoutingModule{

}