import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  isLog: boolean;

  constructor(private router: Router, private authServ: AuthService) {
    this.router.events.subscribe((ret) => {
      if (ret instanceof NavigationEnd) {
        this.isLog = this.authServ.isLogin()
      }
    });
  }

  ngOnInit(): void {

  }
  //redirection vers la page d'acceuil
  toHome() {
    this.router.navigate(['/']);
  }
  //deconnecte l'utilisateur
  logout() {
    this.authServ.logout();    
  }

}
