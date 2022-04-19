import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then(m => m.VerifyPageModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/requests.module').then(m => m.RequestsPageModule)
  },
  {
    path: 'pickup',
    loadChildren: () => import('./pickup/pickup.module').then(m => m.PickupPageModule)
  },
  {
    path: 'dropoff',
    loadChildren: () => import('./dropoff/dropoff.module').then(m => m.DropoffPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'meterreading',
    loadChildren: () => import('./meterreading/meterreading.module').then(m => m.MeterreadingPageModule)
  },
  {
    path: 'drop',
    loadChildren: () => import('./drop/drop.module').then(m => m.DropPageModule)
  },
  {
    path: 'godropoff',
    loadChildren: () => import('./godropoff/godropoff.module').then(m => m.GodropoffPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then(m => m.LogoutPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'companydetails',
    loadChildren: () => import('./companydetails/companydetails.module').then(m => m.CompanydetailsPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
