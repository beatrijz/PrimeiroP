import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { viagem } from '../modelos/viagem';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Usuario} from '../modelos/usuario'
import { Parecer } from '../modelos/parecer';


@Injectable({
  providedIn: 'root'
})
export class ParecerService {
 

  parecerCollection : AngularFirestoreCollection<Parecer>;

  constructor(public angularFireStore:AngularFirestore,private rotas:Router) {
    this.parecerCollection= this.angularFireStore.collection<Parecer> ("parecer");
   }

  salvar(parecer:Parecer){
    this.parecerCollection.add(parecer).then(resultado =>{
    let userDoc= this.parecerCollection.doc(resultado.id);
    userDoc.update({id:resultado.id})
    console.log(parecer.id +"= id viagem");
   console.log("parecer cadastrado")
    this.rotas.navigate(['/coordenador/ListagemUsuarios']);
  });
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.parecerCollection.snapshotChanges().subscribe(result => {
        result.map(documents => {
          let id = documents.payload.doc.id;
          let data = documents.payload.doc.data();
          let document = { id: id, ...data };
          resultados.push(document);
        });
        observer.next(resultados);
        observer.complete();
      }); });
    return meuObservable;
  }
   
atualizarParecer(id){
  let parecer= this.angularFireStore.doc('parecer/'+id);
  console.log(id);
  parecer.update({id:id});
  console.log("atualizarParecer")
  
}
parecer:Parecer;
id;


atualizarTodos(id, parecer){
  let parecerDoc=this.angularFireStore.doc('parecer/'+id);
  console.log(id);
  parecerDoc.update({parecer:parecer.parecer, id: parecer.id, idViagem:parecer.idUsuario 
});
   console.log("atualizada=>"+parecer.empresa+"" );
   this.rotas.navigate(['/parecer/visualizacao/'+id]);
}

  
  listarPorId(parecer) {
    return new Observable(observer => {
      let doc = this.parecerCollection.doc(parecer);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
        
      });
    });
  }


  getParecerUsuario(idUsuario) {
     return this.angularFireStore.collection<Parecer>("parecer", ref=>  
      ref.where ("idUsuario",'==',idUsuario))
      .valueChanges();
      
    }


    getUsuariosSetor(idSetor) {
      console.log("bora ver se chega=> "+ idSetor);
      return this.angularFireStore.collection<Usuario>("usuario", ref=>  
       ref.where ("idSetor",'==',idSetor))
       .valueChanges();
       
     }
  

  deletar(parecer): Promise<void> {
    console.log("deletado com sucesso 0!");
    return this.parecerCollection.doc(parecer).delete();
    console.log("deletado com sucesso 1!");
 
  }  
  atualizar(){
    this.rotas.navigate(['/parecer/cadastro']);
  }
  
  irParaAlterar(id){
    this.rotas.navigate(['visita/atualizar/'+ id])
  }
  
}
