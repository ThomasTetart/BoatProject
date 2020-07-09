import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  formLogin: FormGroup;


  constructor(private builder: FormBuilder, private router: Router, private authServ: AuthService) { }

  get login() { return this.formLogin.get('login'); }
  get password() { return this.formLogin.get('password'); }

  su: boolean = false;
  errLog: boolean = false;

  ngOnInit(): void {

    this.formLogin = this.builder.group({
      login: ['', [Validators.required]],
      password: ['', Validators.required]
    });

  }

  validLogin() {

    this.su = true;

    if (this.formLogin.valid) {

      if (this.formLogin.get('login').value == 'login' && this.formLogin.get('password').value == '1234') {
        this.authServ.setLogin();
      }
      else {
        this.errLog = true;
        console.log("test");
      }

    }

  }


}
