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

  constructor(public router : Router,
    private viagemService: ViagemService) { 
      let viagem: viagem = {empresa: "Biazinha",cidade: "Recife", roteiro: "Olinda", data: "17/11/18", horario: 12,
    professor: "Leonardo", curricular: "Cultura", conteudo: "Legal", carga: 10, turma: "3 top" }
      this.viagemService.salvar(viagem);
  


    }

  ngOnInit() {
  }

}
