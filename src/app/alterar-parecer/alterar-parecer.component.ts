import { Component, OnInit } from '@angular/core';
import { ParecerService } from '../servicos/parecer.service';
import { Parecer } from '../modelos/parecer';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-parecer',
  templateUrl: './alterar-parecer.component.html',
  styleUrls: ['./alterar-parecer.component.css']
})
export class AlterarParecerComponent implements OnInit {
Parecer;
id:'';


  constructor(public parecerService:ParecerService,public route:ActivatedRoute) { 
    this.Parecer={idViagem:"",id:'',parecer:''}
     

  }

  ngOnInit() {
    this.route.params.subscribe(params=> {this.id = params["id"];
    this.parecerService.listarPorId(this.id).subscribe( atualizarParecer=> {
      this.Parecer = atualizarParecer;
    
    }
    )});
  }

atualizarParecer(){
  this.parecerService.atualizarTodos(this.id, this.Parecer);
}



}