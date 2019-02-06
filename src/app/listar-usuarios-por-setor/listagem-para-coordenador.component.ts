import { Component, OnInit } from '@angular/core';
import { SetorService } from '../servicos/setor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { Setor } from '../modelos/setor';
import { ViagemService } from '../servicos/viagem.service';
import { viagem } from '../modelos/viagem';

@Component({
  selector: 'app-listagem-para-coordenador',
  templateUrl: './listagem-para-coordenador.component.html',
  styleUrls: ['./listagem-para-coordenador.component.css']
})
export class ListagemParaCoordenadorComponent implements OnInit {
   usuariosSetor:Usuario[];
   usuario:Usuario;
   setor:Setor;
   viagens:viagem[];
   idUsuario;

   
  

  constructor(private setorService:SetorService,private router: Router,private viagemService:ViagemService,
     private activedRoute:ActivatedRoute) {
      console.log("id setor "+sessionStorage.getItem('idSetor'));
     this.viagemService.getUsuariosSetor().subscribe(
      listaUsuariosSetor=>{
        this.usuariosSetor = listaUsuariosSetor;
      }
     );
   }

  ngOnInit() {
     this.activedRoute.params.subscribe(params =>{
       this.idUsuario=params['id'];
       console.log(this.idUsuario);
       sessionStorage.setItem('idServidoor',this.idUsuario);
    
    });
  }


  // getViagensUsuario(idUsuario){
  //   this.router.navigate(['/visita/listar/'+idUsuario]);
  //   this.viagemService.getViagensUsuario(idUsuario).subscribe(
  //     listaViagens=>{
  //       this.viagens = listaViagens;
  //       for(let i=0;i<this.viagens.length;i++){
  //         console.log(this.viagens[i])
  //       }
  //     }
  //   );
  // }
}
