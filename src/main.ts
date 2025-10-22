// src/main.ts (ĐÃ SỬA)

import 'zone.js';

import { config } from './app/app.config'; // 👈 Sửa thành 'config'
import { AppComponent } from './app/app';
import {bootstrapApplication} from '@angular/platform-browser';

bootstrapApplication(AppComponent, config).catch((err) => // 👈 Dùng tên 'config'
  console.error(err)
);
