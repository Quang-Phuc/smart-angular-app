import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { HomeComponent } from './modules/home/home'; // ⚠️ Thêm import này

export const routes: Routes = [
  // 1. Route trang chủ (không cần guard)
  {
    path: '',
    component: HomeComponent // Đặt HomeComponent làm trang gốc
  },

  // 2. Route Đăng nhập/Đăng ký
  {
    path: 'login',
    loadComponent: () => import('./modules/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./modules/auth/register/register').then(m => m.RegisterComponent)
  },

  // 3. Route Layout nội bộ (cần guard)
  {
    path: '',
    // component: MainLayoutComponent, // Thêm LayoutComponent khi bạn đã tạo
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./modules/dashboard/dashboard').then(m => m.DashboardComponent)
      },
      // ... các route đã đăng nhập khác
    ]
  },
  { path: '**', redirectTo: '' } // Page Not Found/Redirect về trang chủ
];
