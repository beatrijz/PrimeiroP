import { Component, OnInit } from '@angular/core';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicos/usuario.service';



@Component({
  selector: 'app-cadastrar-setor',
  templateUrl: './cadastrar-setor.component.html',
  styleUrls: ['./cadastrar-setor.component.css']
})
export class CadastrarSetorComponent implements OnInit {

  usuarios:Usuario[];
  usuario:Usuario;
  setor:Setor
  usuarioSelecionado;
  // msgs: Message[] = [];

  user: Usuario;
  users: Usuario[];
  constructor(public router : Router,private setorService: SetorService,private usuarioService: UsuarioService) {
     this.usuario= {nome:"",id:"",senha:"senha",siape:null,idSetor:""};
      this.setor= {nome:"",id:"",idUsuario:""};
     this.usuarioService.listarTodos().subscribe(
      listaUsuarios=>{
        this.usuarios = listaUsuarios;
        
      }
    );
  
  }
     
  
  ngOnInit() {
    this.usuarioService.listarTodos().subscribe(resultado => {
      this.users = resultado;
    })
  }
  

  salvar(){
    console.log(this.usuarioSelecionado);
    //console.log(this.usuarioSelecionado.nome);
    //console.log(this.usuarioSelecionado.id);
    //this.setor.idUsuario= this.usuarioSelecionado.id
    //this.setorService.cadastrar(this.setor);
    
    // if(this.usuarioSelecionado.id!= null){
    //   console.log("id do usuario "+this.usuarioSelecionado.id);
    //   console.log(this.usuarioSelecionado.nome);
    //   console.log(this.setor.idUsuario);
    // }
  }


}