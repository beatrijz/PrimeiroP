import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';

@Component({
  selector: 'app-alterar-usuario',
  templateUrl: './alterar-usuario.component.html',
  styleUrls: ['./alterar-usuario.component.css']
})
export class AlterarUsuarioComponent implements OnInit {

  usuario;
  id=" ";
  ehAdm=false;
  naoEhAdm=true;
  setorSelecionado;;
  setores:Setor[];

  constructor(private usuarioService:UsuarioService, private rotas:Router, private route: ActivatedRoute,private setorService:SetorService) {
    this.usuario = {nome:'', senha:'', siape:null,idSetor:"",ehCoordenador:false}
    this.setorService.listarTodos().subscribe(
      listaSetor=>{
        this.setores = listaSetor;
      }
    );

    if(sessionStorage.getItem("ehAdm")=='true'){
      this.ehAdm=true;
    }else{
      this.naoEhAdm=false;
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
  console.log("nome do setor"+this.setorSelecionado.nome);
  console.log("nome do setor"+this.setorSelecionado.id);
  this.usuario.idSetor=this.setorSelecionado.nome;
  this.usuarioService.atualizarTodos(this.id, this.usuario);
}



}
