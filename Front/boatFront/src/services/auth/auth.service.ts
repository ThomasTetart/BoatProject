import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  isLogin(): boolean {
    if (localStorage.getItem('isLog') == null || localStorage.getItem('isLog') == '0') {
      return false;
    }
    else {
      return true;
    }
  }
  setLogin() {
    localStorage.setItem('isLog', '1');
    this.router.navigate(['/home']);
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
