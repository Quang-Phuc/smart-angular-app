import { ComponentFixture, TestBed } from '@angular/core/testing';

// Đổi 'Login' thành 'LoginComponent'
import { LoginComponent } from './login';

// Đổi 'Login' thành 'LoginComponent'
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Đổi 'Login' thành 'LoginComponent'
      imports: [LoginComponent]
    })
      .compileComponents();

    // Đổi 'Login' thành 'LoginComponent'
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
