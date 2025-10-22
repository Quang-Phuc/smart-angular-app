import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Auth Interceptor (Functional Interceptor)
 * Tự động thêm header 'Authorization: Bearer <token>' vào các API request.
 * Nếu token hết hạn hoặc không hợp lệ, có thể xử lý chuyển hướng về trang đăng nhập.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Lấy token từ Local Storage
  const token = localStorage.getItem('authToken');
  const router = inject(Router);

  if (token) {
    // Nếu có token, tạo một bản sao của request và thêm header Authorization
    const cloned = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    // Chuyển request đã được clone đi tiếp
    return next(cloned);
  }

  // Nếu không có token, chuyển request gốc đi tiếp
  return next(req);
};
