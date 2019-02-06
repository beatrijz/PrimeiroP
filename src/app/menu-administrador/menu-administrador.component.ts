import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from '../servicos/usuario.service';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(public usuarioService:UsuarioService) { }
  items: MenuItem[];
  activeItem: MenuItem;
  ngOnInit() {
    this.items = [
      {
          label: 'Usuário',
          icon: 'pi pi-fw pi-cog',
          items: [
              {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/usuario/cadastro']},
              {label: 'listar', icon: 'pi pi-fw pi-refresh',routerLink: ['/administrador/listarTodosUsuarios']},
          ]
      },
    {
      label: 'Setor',
      icon: 'pi pi-fw pi-cog',
      items: [
          {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/setor/cadastro']},
          {label: 'listar', icon: 'pi pi-fw pi-refresh',routerLink: ['/setor/listar']},
      ]
  },
      
      {
        label: 'sair', icon: 'pi pi-fw pi-times',routerLink: ['/'],command:(event) => {
            this.usuarioService.Sair();
        }
      }
  ];
  }

}
