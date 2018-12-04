import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';
import {SelectItem} from 'primeng/api';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  setores:Setor[];
  usuario:Usuario;
  setorSelecionado;
  constructor(public router : Router,private usuarioService: UsuarioService,private setorService:SetorService) {
     this.usuario= {nome:"", siape:null, senha:"",idSetor:""};
      
     this.setorService.listarTodos().subscribe(
      listaSetores=>{
        this.setores = listaSetores;
        // this.setor=this.setores.setor;
      }
    );
     
    console.log(this.usuario.idSetor);
  }

  ngOnInit() {
  }
  

  irTelaLogin(){
    this.usuarioService.irTelaLogin();
  }

  salvar(){
    this.usuarioService.cadastrar(this.usuario);
    console.log(this.setorSelecionado.nome);
    this.usuario.setor=this.setorSelecionado.nome;
    

  }


//   show() {
//     this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
//     }

//   hide() {
//     this.msgs = [];
// }
}


