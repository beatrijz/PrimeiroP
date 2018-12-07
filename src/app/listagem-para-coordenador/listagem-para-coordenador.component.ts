import { Component, OnInit } from '@angular/core';
import { SetorService } from '../servicos/setor.service';
import { Router } from '@angular/router';
import { viagem } from 'PrimeiroP/src/app/viagem/viagem';
import { Usuario } from 'PrimeiroP/src/app/usuario/usuario';

@Component({
  selector: 'app-listagem-para-coordenador',
  templateUrl: './listagem-para-coordenador.component.html',
  styleUrls: ['./listagem-para-coordenador.component.css']
})
export class ListagemParaCoordenadorComponent implements OnInit {
  viagensSetor:Usuario[];
  usuario:Usuario;

  constructor(private setorService:SetorService,private router: Router) {
    this.setorService.getViagensUsuarioMesmoSetor(this.usuario).subscribe(
      listaViagensSetor=>{
        this.viagensSetor = listaViagensSetor;
      }
    );


   }

  ngOnInit() {
  }

}
