import { RenderMode, ServerRoute } from '@angular/ssr';

// 💡 Xóa bỏ toàn bộ quy tắc RenderMode cho path: '**' để Server chỉ phục vụ tài nguyên tĩnh
// Trong chế độ phát triển, điều này thường cho phép Router của Client (trình duyệt) hoạt động tốt hơn.

export const serverRoutes: ServerRoute[] = [
  // {
  //   path: '**',
  //   renderMode: RenderMode.Server // Tạm thời comment hoặc xóa
  // }
];
