import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCoordenadorComponent } from './listar-coordenador.component';

describe('ListarCoordenadorComponent', () => {
  let component: ListarCoordenadorComponent;
  let fixture: ComponentFixture<ListarCoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
