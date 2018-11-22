import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { ActivatedRoute } from '@angular/router';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-visualizacao-viagem',
  templateUrl: './visualizacao-viagem.component.html',
  styleUrls: ['./visualizacao-viagem.component.css']
})
export class VisualizacaoViagemComponent implements OnInit {

  viagensTecnicas: viagem[]=[];
  id: number;
  private sub: any;
  private viagemResultado;
 

  constructor(private route: ActivatedRoute,private viagemS:ViagemService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(params['id']);
      this.viagemS.listarPorId(this.id).subscribe(resultado => {
      this.viagemResultado= resultado
      this.viagensTecnicas.push(this.viagemResultado);

      console.log("esse é o id"+this.id);
      
      });
    
   
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}