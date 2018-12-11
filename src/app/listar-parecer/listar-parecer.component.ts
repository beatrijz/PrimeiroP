import { Component, OnInit } from '@angular/core';
import { Parecer } from '../modelos/parecer';
import { Router } from '@angular/router';
import { ParecerService } from '../servicos/parecer.service';

@Component({
  selector: 'app-listar-parecer',
  templateUrl: './listar-parecer.component.html',
  styleUrls: ['./listar-parecer.component.css']
})
export class ListarParecerComponent implements OnInit {

  pareces:Parecer[];

  constructor(private parecerService:ParecerService,public rotas:Router) {
    this.parecerService.listarTodos().subscribe(
      listaParecer=>{
        this.pareces = listaParecer;
      }
    );
  }
  deletar(parecer){
    this.parecerService.deletar(parecer.id);
  }
  atuaalizar(id){
    this.parecerService.irParaAlterar(id);
  }
 

  ngOnInit() {
  }

}