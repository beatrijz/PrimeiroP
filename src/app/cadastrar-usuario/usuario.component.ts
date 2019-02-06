import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';
import {SelectItem} from 'primeng/api';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';
import { ViagemService } from '../servicos/viagem.service';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  setores:Setor[];
  usuarios: Usuario[];
  usuario:Usuario;
  setorEscolhido;

   
  constructor(public router : Router,private usuarioService: UsuarioService,private setorService:SetorService, private viagemService: ViagemService) {
    this.usuario={nome:'',senha:'',siape:null,id:'',idSetor:''}
    this.setorService.listarTodos().subscribe(
      listaSetor=>{
        this.setores = listaSetor;
      }
    );

  }

  ngOnInit() {
  }
  
  

  irTelaLogin(){
    this.usuarioService.irTelaLogin();
  }

  salvar(){
    console.log(this.setorEscolhido.nome);
     this.usuario.idSetor=this.setorEscolhido.id;
    this.usuarioService.cadastrar(this.usuario);


    // console.log(this.setorEscolhido);
  //  for(let i=0;i<this.setorSelecionado;i++){
  //    console.log("voty "+this.setorSelecionado[i]);
  //    console.log(this.setorSelecionado[i].id);
  //  }
    //console.log("o nome do setor era pra está aqui "+this.setorSelecionado.nome);
    //console.log("o id so setor era pra está aqui" +this.setorSelecionado.id);
    
    

  }


//   show() {
//     this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
//     }

//   hide() {
//     this.msgs = [];
// }
}


