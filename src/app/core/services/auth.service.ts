import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, tap, catchError, throwError } from 'rxjs';
import { ApiService } from './api.service';
import { Credentials, RegisterPayload, AuthResponse } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private api = inject(ApiService);
  private router = inject(Router);

  // BehaviorSubject: Theo dõi trạng thái đăng nhập
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  // Observable: Lưu thông tin người dùng (ví dụ: tên, vai trò)
  private currentUserSubject = new BehaviorSubject<AuthResponse['user'] | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  login(credentials: Credentials) {
    return this.api.post<AuthResponse>('/auth/login', credentials).pipe(
      tap(res => {
        this.setToken(res.token);
        this.setUser(res.user);
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/dashboard']);
      }),
      catchError(error => {
        // Xử lý lỗi đăng nhập (hiển thị thông báo, logging...)
        console.error('Login failed', error);
        return throwError(() => new Error('Tên đăng nhập hoặc mật khẩu không đúng.'));
      })
    );
  }

  register(payload: RegisterPayload) {
    return this.api.post<AuthResponse>('/auth/register', payload).pipe(
      tap(res => {
        // Sau khi đăng ký thành công, tự động đăng nhập
        this.setToken(res.token);
        this.setUser(res.user);
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/dashboard']);
      }),
      catchError(error => {
        console.error('Register failed', error);
        return throwError(() => new Error('Đăng ký không thành công. Vui lòng thử lại.'));
      })
    );
  }

  logout() {
    // 1. Xóa token và thông tin user
    this.setToken(null);
    this.setUser(null);

    // 2. Cập nhật trạng thái
    this.isAuthenticatedSubject.next(false);

    // 3. Chuyển hướng
    this.router.navigate(['/login']);
  }

  private setToken(token: string | null) {
    if (token) {
      localStorage.setItem('authToken', token);
    } else {
      localStorage.removeItem('authToken');
    }
  }

  private setUser(user: AuthResponse['user'] | null) {
    this.currentUserSubject.next(user);
    // Có thể lưu user vào session storage nếu cần
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
