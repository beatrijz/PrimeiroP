import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarViagemComponent } from './listar-viagem.component';

describe('ListarViagemComponent', () => {
  let component: ListarViagemComponent;
  let fixture: ComponentFixture<ListarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
