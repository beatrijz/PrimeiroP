import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarViagemComponent } from './buscar-viagem.component';

describe('BuscarViagemComponent', () => {
  let component: BuscarViagemComponent;
  let fixture: ComponentFixture<BuscarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
