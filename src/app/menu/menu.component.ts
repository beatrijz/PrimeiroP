import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    private items: MenuItem[];


  constructor() { }
      
      ngOnInit() {
          this.items = [
              {label:'Cadastrar Usuario'},
              {label:'Alterar Usuario'},
              {label:'Sair'}
          ]
        }
        }
      
              
      
  
  



