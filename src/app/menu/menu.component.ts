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


  //ngOnInit() {
    
      // this.items = [
          // {label: 'Cadastrar Viagem', routerLink: ['/visita/cadastro']},
          // {label: 'ListarViagem',  routerLink: ['/visita/listar']},
          // {label: 'sair', routerLink: ['/']},
          // {img:, routerLink: ['/']},
         
      // ];
      // this.activeItem = this.items[3];
    
      ngOnInit() {
        this.items = [
            {
                label: 'usuario',
                icon: 'pi pi-fw pi-cog',
                items: [{
                        label: 'editar',  
                        icon: 'pi pi-fw pi-plus',
                        items: [
                          
                            {label: 'cadastro',routerLink: ['/visita/cadastro']},
                            {label: 'deletar', routerLink: ['/visita/listar']},
                            {label: 'visualizar'},
                            {label: 'alterar'},
                            {label: 'buscar'}
                        ]
                    },
                    {label: 'entrar',routerLink: ['/']},
                    {separator:true},
                    {label: 'sair'}
                ]
            },
            {
                label: 'viagem',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {label: 'cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/visita/cadastro']},
                    {label: 'Deletar', icon: 'pi pi-fw pi-trash'},
                    {label: 'Listar', icon: 'pi pi-fw pi-tags',routerLink: ['/visita/listar']},
                    {label: 'Alterar', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
              label: 'setor',
              icon: 'pi pi-fw pi-cog',
              items: [
                  {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/setor/cadastro']},
                  {label: 'Listar', icon: 'pi pi-fw pi-tags'},
                  {label: 'Alterar', icon: 'pi pi-fw pi-refresh'}
              ]
          },
          {
            label: 'coordenador',
            icon: 'pi pi-fw pi-cog',
            items: [
                {label: 'Deletar', icon: 'pi pi-fw pi-trash',routerLink: ['/coordenador/cadastro']},
                {label: 'Listar', icon: 'pi pi-fw pi-tags'},
                {label: 'Alterar', icon: 'pi pi-fw pi-refresh'}
            ]
          },
            {
                label: 'sair', icon: 'pi pi-fw pi-times'
            }
        ];
    }
  
  salvar(viagem){
    this.viagemService.salvar(viagem);
  }
}
        
      
              
      
  
  



