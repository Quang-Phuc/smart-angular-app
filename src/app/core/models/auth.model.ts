/**
 * Interface cho thông tin đăng nhập (payload gửi đi)
 */
export interface Credentials {
  email: string;
  password: string;
}

/**
 * Interface cho thông tin đăng ký (payload gửi đi)
 */
export interface RegisterPayload {
  email: string;
  password: string;
  fullName: string;
}

/**
 * Interface cho phản hồi (response) từ API sau khi đăng nhập/đăng ký thành công
 */
export interface AuthResponse {
  token: string;
  user: {
    id: number;
    email: string;
    fullName: string;
    role: string; // Vai trò của người dùng
  };
}
