import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SetorService } from '../servicos/setor.service';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicos/usuario.service';



@Component({
  selector: 'app-alterar-setor',
  templateUrl: './alterar-setor.component.html',
  styleUrls: ['./alterar-setor.component.css']
})
export class AlterarSetorComponent implements OnInit {

  setor;
  id=" ";
  usuarios;
  usuario:Usuario;
  coordenadorAdicionado;

  constructor(private setorService:SetorService, private rotas:Router, private route: ActivatedRoute,private usuarioService:UsuarioService) {
    this.usuario= {nome:"",id:"",senha:"senha",siape:null};
      this.setor= {nome:null,id:"",idUsuario:""};
      this.usuarioService.listarUsuariosPorSetor().subscribe(
      listaUsuarios=>{
        this.usuarios = listaUsuarios;
        console.log(this.usuarios.length);
      }
    );
  }


  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.setorService.listarPorId(this.id).subscribe( atualizarSetor => {
      this.setor = atualizarSetor;
      
    }
    )});
  }
  

  atualizarSetor(){
    console.log("coordenador adicionado "+this.coordenadorAdicionado);
    console.log("id: "+this.coordenadorAdicionado.id);
    console.log("nome: "+this.coordenadorAdicionado.nome);
    this.setor.idUsuario=this.coordenadorAdicionado.id;
    this.setorService.atualizarTodos(this.id, this.setor);
}



}
