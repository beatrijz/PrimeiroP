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

  constructor(
    public router : Router,
   private usuarioService: UsuarioService) {
     let usuario: Usuario= {nome:"Leonardo", siape:12345, senha:"trtrtrt"};
    
     this.usuarioService.salvar(usuario);
    

    }

  ngOnInit() {
  }

}
