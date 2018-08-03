import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingRoutingModule } from "./shopping-routing.module";
import { FormsModule } from "@angular/forms";

@NgModule(
    {
        declarations:[
          ShoppingListComponent,
          ShoppingEditComponent
        ],
        imports:[
            FormsModule,
            ShoppingRoutingModule,
            SharedModule,
        ]
    }
)
export class ShoppingListModule{
}