import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

 
  usuario:Usuario[];

  constructor(private usuarioService:UsuarioService) {

    this.usuarioService.listarTodos().subscribe(
      listaUsuario=>{
        this.usuario = listaUsuario;
      }
    );

  }

  ngOnInit() {
  }

}
