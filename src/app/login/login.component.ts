import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:Usuario;


login (usuario){
  this.UsuarioService.login(usuario.nome, usuario.senha);
}

  constructor(private UsuarioService : UsuarioService) {

   }
   fazerLogin(){
     console.log(this.usuario);

   }

  ngOnInit() {
  }

}
