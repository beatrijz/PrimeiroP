import { Component, OnInit } from '@angular/core';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';
import { Router } from '@angular/router';
import { UsuarioService } from 'PrimeiroP/src/app/usuario.service';
import { Usuario } from 'PrimeiroP/src/app/usuario/usuario';

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
  constructor(public router : Router,private setorService: SetorService,private usuarioService: UsuarioService) {
     this.usuario= {nome:"",id:"",senha:"senha",siape:null};
      this.setor= {nome:"",id:"",idUsuario:""};
     this.usuarioService.listarTodos().subscribe(
      listaUsuarios=>{
        this.usuarios = listaUsuarios;
        // this.setor=this.setores.setor;
      }
    );
     
    console.log(this.usuario.nome)
  }
     
  
  ngOnInit() {
  }
  

  salvar(){
    this.setorService.cadastrar(this.setor);

  }
}