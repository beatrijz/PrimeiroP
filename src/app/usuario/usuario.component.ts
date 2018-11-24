import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuario:Usuario;

  constructor(public router : Router,private usuarioService: UsuarioService) {
     this.usuario= {nome:"", siape:0, senha:""};
     
  }

  ngOnInit() {
  }
  
  

  salvar(){
    this.usuarioService.salvar(this.usuario);

  }

}
