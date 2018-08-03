import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListService } from "../shopping-list/shipping-list.service";
import { RecipesService } from "../recipes/recipes.service";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";
import { AuthGuard } from "../auth/auth-guard.service";
import { AppRoutingMoudule } from "./app-routing.module";

@NgModule({
    declarations:[HeaderComponent],
    imports:[
        SharedModule,
        AppRoutingMoudule
    ],
    providers:[
        ShoppingListService,
        RecipesService,
        DataStorageService,
        AuthService,
        AuthGuard 
    ],
    exports:[
        HeaderComponent,
        AppRoutingMoudule
    ]
})
export class CoreModule{

}