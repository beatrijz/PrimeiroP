import { Component, OnInit } from '@angular/core';
import { viagem } from '../modelos/viagem';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-listar-viagem',
  templateUrl: './listar-viagem.component.html',
  styleUrls: ['./listar-viagem.component.css']
})
export class ListarViagemComponent implements OnInit {
  viagens:viagem[];

  constructor(private viagemServico:ViagemService){
    this.viagemServico.listarTodos().subscribe(
      listaViagens=>{
        this.viagens = listaViagens;
      }
    );
  }
  deletar(viagem){
    this.viagemServico.deletar(viagem.id);
  }
  
  ngOnInit() {
  }
}

