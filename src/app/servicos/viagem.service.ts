import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { viagem } from '../modelos/viagem';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ViagemService {
  viagemCollection : AngularFirestoreCollection<viagem>;

  constructor(public angularFireStore:AngularFirestore) {
    this.viagemCollection= this.angularFireStore.collection<viagem> ("viagem");
   }
   salvar(viagem: viagem){
    this.viagemCollection.add(viagem).then(resultado => {
      viagem.id = resultado.id;
   });
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.viagemCollection.snapshotChanges().subscribe(result => {
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
  
  listarPorId(id) {
    return new Observable(observer => {
      let doc = this.viagemCollection.doc(id);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
        
      });
    });
  }
 

  deletar(viagem): Promise<void> {
    return this.viagemCollection.doc(viagem.id).delete();
  }
  
  alterar(viagem){

  }
  

  
}
