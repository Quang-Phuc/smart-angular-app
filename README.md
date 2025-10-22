# SmartAngularApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


smart-angular-app/
└── src/
└── app/
├── core/                  # LỚP LÕI (CHUNG, SINGLETON)
│   ├── services/          # Các Services lõi (API, Auth)
│   │   ├── api.service.ts       
│   │   └── auth.service.ts      
│   ├── guards/            # Các Guards bảo vệ Route
│   │   └── auth.guard.ts        
│   ├── interceptors/      # Xử lý HTTP Request/Response (Token, Loading)
│   │   └── auth.interceptor.ts  
│   ├── models/            # Interfaces, Types dùng chung
│   │   ├── user.model.ts        
│   │   └── common.model.ts      
│   └── menu.config.ts     # Dữ liệu tĩnh cấu hình Menu 3 cấp
│
├── shared/                # LỚP CHIA SẺ (TÁI SỬ DỤNG)
│   ├── components/        # Các UI Components nhỏ, tái sử dụng cao
│   │   ├── data-table/          # Bảng dữ liệu chung (MatTable)
│   │   ├── sidebar-menu/        # Menu đệ quy (3 cấp)
│   │   └── loading-spinner/     
│   ├── directives/        # Directives tùy chỉnh
│   └── pipes/             # Pipes tùy chỉnh
│
├── layout/                # LỚP KHUNG SƯỜN
│   └── main-layout/       # Main container (Header, Sidebar, Content <router-outlet>)
│
├── modules/               # LỚP TÍNH NĂNG (FEATURE MODULES)
│   ├── auth/              # Đăng nhập, Đăng ký, Quên mật khẩu
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/         # Tổng quan
│   │   └── dashboard.component.ts
│   ├── system/            # Quản lý Hệ thống (Lazy Loaded)
│   │   ├── user/
│   │   └── role/
│   └── ...                # Các modules nghiệp vụ khác (Products, Orders, ...)
│
├── app.component.ts       # Root Component
├── app.config.ts          # Cấu hình Providers, Interceptors
└── app.routes.ts          # Định nghĩa Route chính
