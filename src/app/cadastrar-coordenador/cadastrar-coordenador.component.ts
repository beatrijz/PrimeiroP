import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoordenadorService } from '../servicos/coordenador.service';
import { Coordenador } from '../modelos/coordenador';

@Component({
  selector: 'app-cadastrar-coordenador',
  templateUrl: './cadastrar-coordenador.component.html',
  styleUrls: ['./cadastrar-coordenador.component.css']
})
export class CadastrarCoordenadorComponent implements OnInit {

  coordenador:Coordenador;
  constructor(public router:Router,private coordenadorService: CoordenadorService) {
  this.coordenador= {nome:"", siape:null, senha:""};
   }

  ngOnInit() {
  }

  salvar(){
    this.coordenadorService.cadastrar(this.coordenador);
  }

}
