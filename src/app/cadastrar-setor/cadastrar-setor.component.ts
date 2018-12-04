import { Component, OnInit } from '@angular/core';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-setor',
  templateUrl: './cadastrar-setor.component.html',
  styleUrls: ['./cadastrar-setor.component.css']
})
export class CadastrarSetorComponent implements OnInit {

  
  setor:Setor;
  // msgs: Message[] = [];
  constructor(public router : Router,private setorService: SetorService) {
     this.setor= {nome:""};
     
  }

  ngOnInit() {
  }
  

  salvar(){
    this.setorService.cadastrar(this.setor);

  }
}