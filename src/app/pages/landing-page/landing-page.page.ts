import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage  {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  // login() {
  //   this.auth.login(this.credentials).subscribe(() => {
  //     this.router.navigateByUrl('/profile');
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }
}
