import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor() { }
  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit() {
    this.items = [
      {
          label: 'Usuário',
          icon: 'pi pi-fw pi-cog',
          items: [
              {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/usuario/cadastro']},
              {label: 'Buscar', icon: 'pi pi-fw pi-refresh'},
              {label: 'Alterar', icon: 'pi pi-fw pi-refresh'},
              {label: 'listar', icon: 'pi pi-fw pi-refresh'},
              {label: 'Deletar', icon: 'pi pi-fw pi-refresh'}
          ]
      },
    {
      label: 'Setor',
      icon: 'pi pi-fw pi-cog',
      items: [
          {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/setor/cadastro']},
          {label: 'Buscar', icon: 'pi pi-fw pi-refresh'},
          {label: 'Alterar', icon: 'pi pi-fw pi-refresh'},
          {label: 'listar', icon: 'pi pi-fw pi-refresh'},
          {label: 'Deletar', icon: 'pi pi-fw pi-refresh'}
      ]
  },
      
      {
          label: 'sair', icon: 'pi pi-fw pi-times'
      }
  ];
  }

}
