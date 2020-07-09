import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Injectable({
providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authServ: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    //test si url racine ET user log pour redirection vers home
    if (state.url == '/') {
      if (this.authServ.isLogin()) {
        this.router.navigate(['/home']);
      }     
      return true;
    }

    //test si l'user est authentifié
    if (this.authServ.isLogin()) {
      return true;
    }
    else {
      //User non authentifié retour a la page de connexion
      this.router.navigate(['/']);
      return false;
    }
   
  }

}
