import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarSetorComponent } from './alterar-setor.component';

describe('AlterarSetorComponent', () => {
  let component: AlterarSetorComponent;
  let fixture: ComponentFixture<AlterarSetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarSetorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
