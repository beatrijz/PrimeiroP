import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarViagemComponent } from './alterar-viagem.component';

describe('AlterarViagemComponent', () => {
  let component: AlterarViagemComponent;
  let fixture: ComponentFixture<AlterarViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
