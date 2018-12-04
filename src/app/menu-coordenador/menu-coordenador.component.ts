import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-coordenador',
  templateUrl: './menu-coordenador.component.html',
  styleUrls: ['./menu-coordenador.component.css']
})
export class MenuCoordenadorComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      {
          label: 'Coordenador',
          icon: 'pi pi-fw pi-cog',
          items: [{
                  label: 'editar',  
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Alterar Dados'},
                      {label: 'Visualizar'},

                  ]
              },
             
              {separator:true},
              {label: 'sair'}
          ]
      },
      {
          label: 'sair', icon: 'pi pi-fw pi-times'
      }
  ];
  }
  }

  


