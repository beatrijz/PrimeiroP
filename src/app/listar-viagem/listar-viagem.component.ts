import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { Usuario } from '../modelos/usuario';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-listar-viagem',
  templateUrl: './listar-viagem.component.html',
  styleUrls: ['./listar-viagem.component.css']
})
export class ListarViagemComponent implements OnInit {
  viagens:viagem[];
  usuario:Usuario;

  constructor(private viagemServico:ViagemService){

   this.viagemServico.getViagensUsuario().subscribe(
      listaViagens=>{
        this.viagens = listaViagens;
      }
    );

  }
  deletar(viagem){
    this.viagemServico.deletar(viagem.id);
  }

  // listarUsuarioEspecifico(){
  //   this.viagemServico.listarUsuarioEspecifico(this.usuario);
  // }
    

  ngOnInit() {
  }
  
}

