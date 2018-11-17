import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacaoViagemComponent } from './visualizacao-viagem.component';

describe('VisualizacaoViagemComponent', () => {
  let component: VisualizacaoViagemComponent;
  let fixture: ComponentFixture<VisualizacaoViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacaoViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacaoViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
