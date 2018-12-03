import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private usuario:Usuario;

  constructor(private UsuarioService : UsuarioService, public messageService:MessageService) {
      this.usuario = {nome:'', senha:'', siape:null}
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
