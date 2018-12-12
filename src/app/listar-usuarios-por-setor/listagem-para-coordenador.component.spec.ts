import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListagemParaCoordenadorComponent } from './listagem-para-coordenador.component';


describe('ListagemParaCoordenadorComponent', () => {
  let component: ListagemParaCoordenadorComponent;
  let fixture: ComponentFixture<ListagemParaCoordenadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemParaCoordenadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemParaCoordenadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
