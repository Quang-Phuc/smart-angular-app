import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  // ⚠️ THAY ĐỔI URL API CỦA BẠN TẠI ĐÂY!
  private apiUrl = 'https://api.example.com/v1';

  /**
   * Phương thức GET chung để lấy dữ liệu.
   * @param path Đường dẫn cụ thể của API (ví dụ: 'users', 'products')
   * @param params HttpParams tùy chọn
   * @returns Observable<T>
   */
  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${this.apiUrl}/${path}`, { params });
  }

  /**
   * Phương thức POST chung để tạo mới dữ liệu.
   * @param path Đường dẫn cụ thể của API
   * @param body Payload dữ liệu gửi đi
   * @returns Observable<T>
   */
  post<T>(path: string, body: any = {}): Observable<T> {
    return this.http.post<T>(`${this.apiUrl}/${path}`, body);
  }

  /**
   * Phương thức PUT chung để cập nhật toàn bộ dữ liệu.
   * @param path Đường dẫn cụ thể của API
   * @param body Payload dữ liệu gửi đi
   * @returns Observable<T>
   */
  put<T>(path: string, body: any = {}): Observable<T> {
    return this.http.put<T>(`${this.apiUrl}/${path}`, body);
  }

  /**
   * Phương thức DELETE chung để xóa dữ liệu.
   * @param path Đường dẫn cụ thể của API
   * @returns Observable<T>
   */
  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(`${this.apiUrl}/${path}`);
  }
}
