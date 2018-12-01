import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../servicos/viagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { viagem } from '../modelos/viagem';

@Component({
  selector: 'app-alterar-viagem',
  templateUrl: './alterar-viagem.component.html',
  styleUrls: ['./alterar-viagem.component.css']
})
export class AlterarViagemComponent implements OnInit {
  viagem;
  
  id=" ";

  constructor(private ViagemService:ViagemService, private rotas:Router, public viagemServico: ViagemService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.viagemServico.listarPorId(this.id).subscribe( atualizarViagem => {
      this.viagem = atualizarViagem;
    }
    )});
  }
  

atualizarViagem(){
  this.viagemServico.atualizarTodos(this.id, this.viagem);
  console.log("atualizarViagem")
}

alterar(){
    this.ViagemService.atualizar();
    console.log("alterar");
  }

}
