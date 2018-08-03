import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { AuthRouting } from "./auth-routing.module";

@NgModule({
  declarations:[
    SigninComponent,
    SignupComponent,
  ],
  imports:[
      SharedModule,
      FormsModule,
      AuthRouting
  ]
})

export class AuthModule{

}