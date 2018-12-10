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

  constructor(private viagemService:ViagemService, private rotas:Router, private route: ActivatedRoute) {
    this.viagem= {cidade:'',roteiro:'',empresa:'',data:'',horarioSaida:"",horarioRetorno:"",professor:"",componente:"",conteudo:"",cargaHoraria:null,turma:"",hospedagem:'',endereco:"",servidor:"",justificativa:"",objetivo:"",metodologia:"",formasAprendizagem:"",quantidadeAlunos:null,idUsuario:sessionStorage.getItem('id')};

   }

  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.viagemService.listarPorId(this.id).subscribe( atualizarViagem => {
      this.viagem = atualizarViagem;
    
    }
    )});
  }
  

atualizarViagem(){
  this.viagemService.atualizarTodos(this.id, this.viagem);
  console.log("atualizarViagem")
}

}
