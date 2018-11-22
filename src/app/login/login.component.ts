import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario:Usuario;

  constructor(private UsuarioService : UsuarioService) {
      this.usuario = {nome:'', senha:'', siape:0}
   }

   fazerLogin(){
     this.UsuarioService.fazerLogin(this.usuario)
     

   }

  ngOnInit() {
  }

}
