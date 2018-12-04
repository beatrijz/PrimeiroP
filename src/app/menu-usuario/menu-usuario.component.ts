import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { viagem } from '../modelos/viagem';
import { ViagemService } from '../servicos/viagem.service';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  constructor(private viagemService: ViagemService) { }
  items: MenuItem[];

  activeItem: MenuItem;
  viagem: viagem;

  
      ngOnInit() {
        this.items = [
            {
                label: 'Usuário',
                icon: 'pi pi-fw pi-cog',
                items: [{
                        label: 'editar',  
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Alterar Dados',routerLink: ["/usuario/atualizar/:id"]},
                        ]
                    },
                   
                    {separator:true},
                    {label: 'sair'}
                ]
            },
           
            {
                label: 'Visita',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {label: 'Cadastrar', icon: 'pi pi-fw pi-trash',routerLink: ['/visita/cadastro']},
                    {label: 'Buscar', icon: 'pi pi-fw pi-refresh'}
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
        
      
              
      
  
  



