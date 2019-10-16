import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-up-thank-you',
  templateUrl: './sign-up-thank-you.page.html',
  styleUrls: ['./sign-up-thank-you.page.scss'],
})
export class SignUpThankYouPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

}
