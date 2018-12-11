import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarParecerComponent } from './listar-parecer.component';

describe('ListarParecerComponent', () => {
  let component: ListarParecerComponent;
  let fixture: ComponentFixture<ListarParecerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarParecerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarParecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
