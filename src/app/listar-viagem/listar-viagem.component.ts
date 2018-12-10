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
  


  ngOnInit() {
    this.activedRoute.params.subscribe(params =>{
    this.idUsuario=params['id'];
    sessionStorage.setItem('idUsuarioRota',this.idUsuario);
    
    
    });
 }


  constructor(private viagemServico:ViagemService, private router: Router,private activedRoute:ActivatedRoute){
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

