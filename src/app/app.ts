import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  standalone: true, // ⚠️ Bắt buộc nếu dùng với bootstrapApplication
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // đúng là styleUrls (có "s")
})
export class AppComponent {
  protected readonly title = signal('smart-angular-app');
}

// ⚡ Xuất ra đúng tên "App" cho file main.ts import
export const App = AppComponent;
