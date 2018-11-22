import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { Usuario } from './usuario';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

    usuario:Usuario;
  constructor(
    public router : Router,
   private usuarioService: UsuarioService) {
     this.usuario = {nome:'', senha:'', siape:0}
    

    }

  ngOnInit() {
  }
  salvar(){
    this.usuarioService.salvar(this.usuario);
    
  }

}
