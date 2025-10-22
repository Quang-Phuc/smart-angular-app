import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs';

/**
 * Auth Guard (Functional Guard)
 * Bảo vệ route bằng cách kiểm tra trạng thái đăng nhập của người dùng.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Theo dõi trạng thái isAuthenticated$ từ AuthService
  return authService.isAuthenticated$.pipe(
    take(1), // Chỉ lấy giá trị hiện tại và hoàn thành Observable
    map(isAuthenticated => {
      if (isAuthenticated) {
        // Nếu đã đăng nhập (true), cho phép truy cập route
        return true;
      } else {
        // Nếu chưa đăng nhập (false), chuyển hướng đến trang đăng nhập
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
