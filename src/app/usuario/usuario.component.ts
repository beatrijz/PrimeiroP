import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicos/usuario.service';
import { Usuario } from '../modelos/usuario';




@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuario:Usuario;
  // msgs: Message[] = [];
  constructor(public router : Router,private usuarioService: UsuarioService) {
     this.usuario= {nome:"", siape:null, senha:""};
     
  }

  ngOnInit() {
  }
  

  irTelaLogin(){
    this.usuarioService.irTelaLogin();
  }

  salvar(){
    this.usuarioService.cadastrar(this.usuario);

  }


//   show() {
//     this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
//     }

//   hide() {
//     this.msgs = [];
// }
}


