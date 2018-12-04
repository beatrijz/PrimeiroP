import { Component, OnInit } from '@angular/core';
import { AdmistradorUService } from '../admistrador-u.service';
import { administrador } from '../modelos/administrador';

@Component({
  selector: 'app-login-administrador',
  templateUrl: './login-administrador.component.html',
  styleUrls: ['./login-administrador.component.css']
})
export class LoginAdministradorComponent implements OnInit {
  administrador: administrador;

  constructor(private administradorService: AdmistradorUService) { }

  ngOnInit() {
  }
  fazerLogin(){
    this.administradorService.fazerLogin(this.administrador);
  }

}
