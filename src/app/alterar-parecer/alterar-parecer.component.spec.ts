import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarParecerComponent } from './alterar-parecer.component';

describe('AlterarParecerComponent', () => {
  let component: AlterarParecerComponent;
  let fixture: ComponentFixture<AlterarParecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarParecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarParecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
