import { ApplicationConfig } from '@angular/core'; // ⚠️ Bỏ import NgZone
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';

export const config: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),

    // ❌ ĐÃ XÓA provider NgZone vì nó gây lỗi hoặc dư thừa khi Zone.js được import đúng

    // ⚡️ Cấu hình HTTP Client và Interceptor
    provideHttpClient(withInterceptors([
      authInterceptor
    ]))
  ]
};
