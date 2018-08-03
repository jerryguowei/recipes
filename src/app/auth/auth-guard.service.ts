import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild, CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
 @Injectable()
export class AuthGuard implements CanActivate,CanActivateChild,CanLoad{
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
  canLoad(route:Route){
      if(this.authService.token!=null){
        return true;
      }else{
        return false;
      }
  }
}