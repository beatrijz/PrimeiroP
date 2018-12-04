import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  usuario;
  id=" ";

  constructor(private usuarioService:UsuarioService, private rotas:Router, private route: ActivatedRoute) {
    this.usuario = {nome:'', senha:'', siape:null,setor:""}
   }

  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.usuarioService.listarPorId(this.id).subscribe( atualizarUsuario => {
      this.usuario = atualizarUsuario;
    
    }
    )});
  }
  

atualizarViagem(){
  this.usuarioService.atualizarTodos(this.id, this.usuario);
  console.log("atualizarViagem")
}

alterar(){
    this.usuarioService.atualizar();
    console.log("alterar");
  }

}
