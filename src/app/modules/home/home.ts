import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent {
  private authService = inject(AuthService);

  // Observable theo dõi trạng thái đăng nhập
  isAuthenticated$: Observable<boolean> = this.authService.isAuthenticated$;

  // Observable theo dõi thông tin user để hiển thị tên
  currentUser$: Observable<{ fullName: string } | null> = this.authService.currentUser$;

  /**
   * Phương thức xử lý Đăng xuất
   */
  logout() {
    this.authService.logout();
  }
}
