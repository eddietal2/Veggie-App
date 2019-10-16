import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignUpVerificationPage } from './sign-up-verification.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpVerificationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SignUpVerificationPage]
})
export class SignUpVerificationPageModule {}
