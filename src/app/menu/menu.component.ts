import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

import { viagem } from '../modelos/viagem';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  


  constructor(private viagemService: ViagemService) { }
  items: MenuItem[];
 
  activeItem: MenuItem;
  viagem: viagem;


  ngOnInit() {
    
      this.items = [
          {label: 'Cadastrar Viagem', routerLink: ['/visita/cadastro']},
          {label: 'ListarViagem',  routerLink: ['/visita/listar']},
          {label: 'sair', routerLink: ['/']},
          // {img:, routerLink: ['/']},
          
          
         
        
         
      ];
      this.activeItem = this.items[3];
    
  }
  salvar(viagem){
    this.viagemService.salvar(viagem);
  }
}
        
      
              
      
  
  



