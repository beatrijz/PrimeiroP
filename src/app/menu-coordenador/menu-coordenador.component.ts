import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UsuarioService } from '../servicos/usuario.service';
import { SetorService } from '../servicos/setor.service';

@Component({
  selector: 'app-menu-coordenador',
  templateUrl: './menu-coordenador.component.html',
  styleUrls: ['./menu-coordenador.component.css']
})
export class MenuCoordenadorComponent implements OnInit {

  constructor(public usuarioService:UsuarioService, private setorService: SetorService) {
      this.setorService.verificarUsuario();
   }
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


  sairSistema(){
    this.usuarioService
  }
  
  }

  


