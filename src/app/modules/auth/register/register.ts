import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { RegisterPayload } from '../../../core/models/auth.model';

// Custom Validator function để kiểm tra Mật khẩu và Xác nhận Mật khẩu có khớp nhau không
export const passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  // Chỉ kiểm tra nếu cả hai trường đã được khởi tạo và có giá trị
  if (password && confirmPassword && password.value !== confirmPassword.value) {
    // Đặt lỗi 'mismatch' lên form group nếu không khớp
    return { mismatch: true };
  }

  // Xóa lỗi nếu khớp
  return null;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule // Dùng cho routerLink
  ],
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  errorMessage: string | null = null;
  isLoading = false;

  registerForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  }, { validators: passwordMatchValidator }); // Áp dụng custom validator lên Form Group

  /**
   * Xử lý sự kiện khi submit form Đăng ký
   */
  onSubmit() {
    // 1. Kiểm tra form có hợp lệ (bao gồm cả lỗi mismatch)
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    // 2. Lấy dữ liệu (chỉ lấy các trường cần thiết cho API)
    const { fullName, email, password } = this.registerForm.getRawValue();
    const payload: RegisterPayload = { fullName: fullName!, email: email!, password: password! };

    // 3. Gọi service đăng ký
    this.authService.register(payload).subscribe({
      next: () => {
        // Thành công: logic chuyển hướng đã được xử lý trong AuthService
        this.isLoading = false;
      },
      error: (e) => {
        // Thất bại: hiển thị thông báo lỗi
        this.errorMessage = e.message || 'Đăng ký thất bại. Vui lòng thử lại.';
        this.isLoading = false;
      }
    });
  }
}
