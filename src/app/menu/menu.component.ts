import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  


  constructor() { }
  items: MenuItem[];
  aux: MenuItem[];
  activeItem: MenuItem;


  ngOnInit() {
      this.items = [
          {label: 'Cadastrar Viagem', icon: 'fa fa-fw fa-bar-chart',},
          {label: 'ListarViagem', icon: 'fa fa-fw fa-bar-chart'},
         
        
         
      ];
      this.aux=[
        {label: 'Alterar Viagem', icon: 'fa fa-fw fa-bar-chart'},
        
      ]
      this.activeItem = this.items[2];
      this.activeItem= this.aux[2];
  }
}
        
      
              
      
  
  



