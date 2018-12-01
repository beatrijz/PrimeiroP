import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViagemService } from '../servicos/viagem.service';
import { viagem } from '../modelos/viagem';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  
  viagem: viagem;
  constructor(public router : Router,private viagemService: ViagemService) { 
   this.viagem= {cidade:'',roteiro:'',empresa:'',data:'',horarioSaida:"",horarioRetorno:"",professor:"",componente:"",conteudo:"",cargaHoraria:null,turma:"",hospedagem:'',endereco:"",servidor:"",justificativa:"",objetivo:"",metodologia:"",formasAprendizagem:"",quantidadeAlunos:null,idUsuario:sessionStorage.getItem('id')};
  }

  ngOnInit() {
  }
  salvar(){
    this.viagemService.salvar(this.viagem);
    
  }
}
