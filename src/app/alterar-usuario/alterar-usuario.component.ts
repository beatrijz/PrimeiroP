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
  ehAdm=false;
  naoEhAdm=false;

  constructor(private usuarioService:UsuarioService, private rotas:Router, private route: ActivatedRoute) {
    this.usuario = {nome:'', senha:'', siape:null,idSetor:"",ehCoordenador:false}

    if(sessionStorage.getItem("ehAdm")=='true'){
      this.ehAdm=true;
    }else{
      this.naoEhAdm=true;
    }
   }

  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.usuarioService.listarPorId(this.id).subscribe( atualizarUsuario => {
      this.usuario = atualizarUsuario;
    
    }
    )});
  }
  

atualizarUsuario(){
  this.usuarioService.atualizarTodos(this.id, this.usuario);
}



}
