import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdmistradorUService } from '../admistrador-u.service';
import { administrador } from '../modelos/administrador';

@Component({
  selector: 'app-cadastro-administrador',
  templateUrl: './cadastro-administrador.component.html',
  styleUrls: ['./cadastro-administrador.component.css']
})
export class CadastroAdministradorComponent implements OnInit {
administrador:administrador;
  constructor(public router : Router,private administradorService: AdmistradorUService) {
   this.administrador= {nome:"", siape: "0000000", senha: "007"};}
 
  ngOnInit() {

  }
  cadastrar(){
    this.administradorService.cadastrar(this.administrador);
  }
  deletar(){
    this.administradorService.deletar(this.administrador)
  }

}
