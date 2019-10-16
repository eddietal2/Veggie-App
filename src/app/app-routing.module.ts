import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/landing-page/landing-page.module#LandingPagePageModule'
  },
  { path: 'landing-page', loadChildren: './pages/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'home',
  loadChildren: () =>
    import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'sign-up-verification', loadChildren: './pages/sign-up-verification/sign-up-verification.module#SignUpVerificationPageModule' },
  { path: 'sign-up-thank-you', loadChildren: './pages/sign-up-thank-you/sign-up-thank-you.module#SignUpThankYouPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
