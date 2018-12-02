import { Injectable } from '@angular/core';
import { Coordenador } from '../modelos/coordenador';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {
  coordenadorCollection : AngularFirestoreCollection<Coordenador>;
  coordenador:Coordenador[];

  constructor(public angularFireStore:AngularFirestore,private rotas:Router) {
    this.coordenadorCollection= this.angularFireStore.collection<Coordenador> ("coordenador");
   }

   cadastrar(coordenador:Coordenador){
    if(coordenador.senha==""){
      console.log("campo senha é obrigatóro");
      //this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});
    }
    if(coordenador.siape==null){
      console.log("campo siape é obrigatóro");
    }
    if(coordenador.nome==""){
      console.log("campo nome é obrigatóro");

    } else {
      this.angularFireStore.collection<Coordenador>("coordenador", ref=>
      ref.where("siape",'==',coordenador.siape))
      .valueChanges().subscribe(resultado=>{ 

      if( resultado.length == 0){
        this.coordenadorCollection.add(coordenador).then(resultadoCoordenador =>{
          let userDoc= this.coordenadorCollection.doc(resultadoCoordenador.id);
          userDoc.update({id:resultadoCoordenador.id})
          console.log(coordenador.nome+"usuário cadastrado!");
          this.rotas.navigate(['/visita/listar']);

        });
      }else{
        console.log("usuário não cadastrado!");
      }
    });
   }

   }
}
