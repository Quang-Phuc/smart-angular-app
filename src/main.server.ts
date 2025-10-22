import 'zone.js'; // 👈 BẮT BUỘC PHẢI THÊM ĐỂ SSR HOẠT ĐỘNG
import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import { config } from './app/app.config.server';

// Hàm bootstrap SSR đúng cú pháp
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, config, context);

export default bootstrap;
