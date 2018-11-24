import { Component, OnInit } from '@angular/core';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-alterar-viagem',
  templateUrl: './alterar-viagem.component.html',
  styleUrls: ['./alterar-viagem.component.css']
})
export class AlterarViagemComponent implements OnInit {

  constructor(private ViagemService:ViagemService) { }

  ngOnInit() {
  }



  alterar(){
    this.ViagemService.atualizar();
  }

}
