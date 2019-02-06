import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';
import { SetorService } from '../servicos/setor.service';
import { Setor } from '../modelos/setor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario:Usuario;
  setores:Setor[];

  constructor(private UsuarioService : UsuarioService, public messageService:MessageService,private setorService:SetorService) {
      this.usuario = {nome:'', senha:'', siape:null,idSetor:""}
      this.setorService.listarTodos().subscribe(
        listaSetores=>{
          this.setores = listaSetores;
        }
      );
  }

  fazerLogin(){
    this.UsuarioService.fazerLogin(this.usuario);
  }

  irTelaCadastro(){
    this.UsuarioService.irTelaCadastro();
  }

  addSingle() {
    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});
  }

  addMultiple() {
    this.messageService.addAll([{severity:'success', summary:'Service Message', detail:'Via MessageService'},
      {severity:'info', summary:'Info Message', detail:'Via MessageService'}]);
  }

  clear() {
  this.messageService.clear();
  }


  ngOnInit() {
  }

}
