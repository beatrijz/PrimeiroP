import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCoordenadorComponent } from './cadastrar-coordenador.component';

describe('CadastrarCoordenadorComponent', () => {
  let component: CadastrarCoordenadorComponent;
  let fixture: ComponentFixture<CadastrarCoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
