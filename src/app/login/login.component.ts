import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario:Usuario;

  constructor(private UsuarioService : UsuarioService) {
      this.usuario = {nome:'', senha:'', siape:null}
   }

   fazerLogin(){
     this.UsuarioService.fazerLogin(this.usuario)
     

   }

   irTelaCadastro(){
    this.UsuarioService.irTelaCadastro();
     
   }

  ngOnInit() {
  }

}
