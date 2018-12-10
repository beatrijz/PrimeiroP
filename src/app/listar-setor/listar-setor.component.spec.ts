import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSetorComponent } from './listar-setor.component';

describe('ListarSetorComponent', () => {
  let component: ListarSetorComponent;
  let fixture: ComponentFixture<ListarSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
