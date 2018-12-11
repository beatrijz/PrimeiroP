import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { ActivatedRoute } from '@angular/router';
import { ViagemService } from '../servicos/viagem.service';
import { Parecer } from '../modelos/parecer';
import { ParecerService } from '../servicos/parecer.service';

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
  Parecer:Parecer;
  ehServidor=false
  ehCoordenador=true;

 

  constructor(private route: ActivatedRoute,private viagemS:ViagemService,private parecerService:ParecerService) {
  this.Parecer= {parecer:'',idViagem:'',id:''};
  }
  
  ngOnInit() {

    if(sessionStorage.getItem('ehCoordenador')=='false'){
      this.ehCoordenador=false;
      this.ehServidor=true;
      console.log("menu coordenador"+this.ehCoordenador);
      console.log("menu coordenador"+this.ehServidor);
    }


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

  salvar(idViagem){
    this.Parecer.idViagem=idViagem;
    this.parecerService.salvar(this.Parecer);
  }
}