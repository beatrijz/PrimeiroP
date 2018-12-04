import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarSetorComponent } from './cadastrar-setor.component';

describe('CadastrarSetorComponent', () => {
  let component: CadastrarSetorComponent;
  let fixture: ComponentFixture<CadastrarSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
