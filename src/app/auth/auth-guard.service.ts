import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Injectable } from "../../../node_modules/@angular/core";
import { AuthService } from "./auth.service";
 @Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private authService:AuthService,private router:Router){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      if(this.authService.token!=null){
          return true;
      }else{
        this.router.navigate(['/signin']);
        return false;
      }
  }
  canActivateChild(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
     return this.canActivate(route,state);
  }
}