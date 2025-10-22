import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home';

export const routes: Routes = [
  // 1. Route Đăng nhập/Đăng ký
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/auth/register/register').then(m => m.RegisterComponent)
  },

  // 2. Route Cần bảo vệ (Dashboard) - Đưa lên trước path: ''
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./modules/dashboard/dashboard').then(m => m.DashboardComponent)
  },

  // 3. Route Trang chủ (Mặc định) - Về cuối cùng
  {
    path: '',
    component: HomeComponent
  },

  // 4. Wildcard
  { path: '**', redirectTo: '' }
];
