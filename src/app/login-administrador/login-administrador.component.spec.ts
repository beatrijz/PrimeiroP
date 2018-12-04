import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAdministradorComponent } from './login-administrador.component';

describe('LoginAdministradorComponent', () => {
  let component: LoginAdministradorComponent;
  let fixture: ComponentFixture<LoginAdministradorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginAdministradorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
