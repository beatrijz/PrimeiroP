import { Component, OnInit } from '@angular/core';
import { Setor } from '../modelos/setor';
import { SetorService } from '../servicos/setor.service';
import { Router } from '@angular/router';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-listar-setor',
  templateUrl: './listar-setor.component.html',
  styleUrls: ['./listar-setor.component.css']
})
export class ListarSetorComponent implements OnInit {
  setores:Setor[];

  constructor(private setorService:SetorService,public rotas:Router,public viagemService:ViagemService) {
    this.setorService.listarTodos().subscribe(
      listaSetor=>{
        this.setores = listaSetor;
      }
    );
  }
  deletar(setor){
    this.setorService.deletar(setor.id);
  }
  irParaAlterar(id){
    this.setorService.irParaAlterarSetor(id);
  }
 

  ngOnInit() {
  }

}