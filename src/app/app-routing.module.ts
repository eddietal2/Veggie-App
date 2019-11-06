import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'landing-page', loadChildren: './pages/landing-page/landing-page.module#LandingPagePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'sign-up-verification', loadChildren: './pages/sign-up-verification/sign-up-verification.module#SignUpVerificationPageModule' },
  { path: 'sign-up-thank-you', loadChildren: './pages/sign-up-thank-you/sign-up-thank-you.module#SignUpThankYouPageModule' },
  { path: 'home',
   loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'breakfast', loadChildren: './pages/recipes/breakfast/breakfast.module#BreakfastPageModule' },
  { path: 'lunch', loadChildren: './pages/recipes/lunch/lunch.module#LunchPageModule' },
  { path: 'dinner', loadChildren: './pages/recipes/dinner/dinner.module#DinnerPageModule' },
  { path: 'snacks', loadChildren: './pages/recipes/snacks/snacks.module#SnacksPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
