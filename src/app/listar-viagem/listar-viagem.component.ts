import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { Usuario } from '../modelos/usuario';
import { ViagemService } from '../servicos/viagem.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-viagem',
  templateUrl: './listar-viagem.component.html',
  styleUrls: ['./listar-viagem.component.css']
})
export class ListarViagemComponent implements OnInit {
  viagens:viagem[];
  usuario:Usuario;
  idUsuario;
  ehCoordenador=true;
  ehServidor=false;
  


  ngOnInit() {
    this.activedRoute.params.subscribe(params =>{
    this.idUsuario=params['id'];
    sessionStorage.setItem('idUsuarioRota',this.idUsuario);
    console.log("qual é priemiro onit"+this.ehServidor);
    
    
    });
 }


  constructor(private viagemServico:ViagemService, private router: Router,private activedRoute:ActivatedRoute){
    console.log("qual é primeiro const"+this.ehServidor);
     if(sessionStorage.getItem('ehCoordenador')=='false'){
      this.ehCoordenador=false;
      this.ehServidor=true;
      console.log("menu coordenador"+this.ehCoordenador);
      console.log("menu coordenador"+this.ehServidor);
    }
    console.log("coordenador "+sessionStorage.getItem('idUsuarioRota'));
    console.log("usuario "+sessionStorage.getItem('id'));
    this.viagemServico.getViagensUsuario().subscribe(
      listaViagens=>{
        this.viagens = listaViagens;
      }
    );
  }
  deletar(viagem){
    this.viagemServico.deletar(viagem.id);
  }

 



  irParaAlterar(id){
    this.viagemServico.irParaAlterar(id);
  }
  
}

