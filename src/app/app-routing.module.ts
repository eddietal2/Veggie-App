import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/landing-page/landing-page.module#LandingPagePageModule'
  },
  { path: 'landing-page', loadChildren: './pages/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
