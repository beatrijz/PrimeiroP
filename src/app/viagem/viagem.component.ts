import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViagemService } from '../viagem.service';
import { viagem } from './viagem';

@Component({
  selector: 'app-viagem',
  templateUrl: './viagem.component.html',
  styleUrls: ['./viagem.component.css']
})
export class ViagemComponent implements OnInit {

  viagem:viagem;
  constructor(private viagemService: ViagemService) { 
    
       this.viagem={empresa: ' ',cidade: ' ', roteiro: ' ', data: " ", horario: 0,
    professor: ' ', curricular: ' ', conteudo: ' ', carga: 0, turma: ' ', formasAprendizagem: '' }
      
  


    }

  ngOnInit() {
  }
  salvar(){
    this.viagemService.salvar(this.viagem);
  }
  }


