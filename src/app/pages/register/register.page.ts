import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentials: TokenPayload = {
    email: '',
    name: '',
    password: ''
  };


  constructor(
    private auth: AuthenticationService,
    private router: Router) { }

    register() {
      this.auth.register(this.credentials).subscribe(() => {
        console.log('Registered');
      }, (err) => {
        console.error(err);
      });
    }

  ngOnInit() {
  }

}
