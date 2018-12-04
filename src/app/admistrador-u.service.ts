import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  administrador,} from './modelos/administrador';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdmistradorUService {
  administradorCollection: AngularFirestoreCollection<administrador>;
  private administradorAutenticado: boolean = false;
  administrador:administrador;


  constructor(public angularFireStore: AngularFirestore, private rotas: Router) { 
    this.administradorCollection = this.angularFireStore.collection<administrador>("administrador");
  }
  cadastrar(administrador:administrador){
    this.angularFireStore.collection<administrador>("administrador", ref => ref.where("siape", '==', administrador.siape))
    .valueChanges().subscribe(resultado => {
      if (resultado.length == 0) {
        this.administradorCollection.add(administrador).then(resultadoAdministrador => {
          let userDoc = this.administradorCollection.doc(resultadoAdministrador.id);
          userDoc.update({ id: resultadoAdministrador.id });
          console.log(administrador.nome + "administrador cadastrado");
          this.rotas.navigate(['/usuario/administrador']);
        
        });
      }
    });
  }
listarTodos(): Observable<any[]> {
  let resultados: any[] = [];
  let meuObservable = new Observable<any[]>(observer => {
    this.administradorCollection.snapshotChanges().subscribe(result => {
      result.map(documents => {
        let id = documents.payload.doc.id;
        let data = documents.payload.doc.data();
        let document = { id: id, ...data };
        resultados.push(document);
      });
      observer.next(resultados);
      observer.complete();
    });
  });
  return meuObservable;
}
listarPorId(administradorId) {
  return new Observable(observer => {
    let doc = this.administradorCollection.doc(administradorId);
    doc.snapshotChanges().subscribe(result => {
      let id = result.payload.id;
      let data = result.payload.data();
      let document = { id: id, ...data };
      observer.next(document);
      observer.complete();
    });
  });
}
deletar(administrador): Promise<void> {
  return this.administradorCollection.doc(administrador).delete();
}
fazerLogin(administrador: administrador) {
  this.angularFireStore.collection<administrador>("administrador", ref => ref.where("siape", '==', administrador.siape)
    .where("senha", "==", administrador.senha))
    .valueChanges().subscribe(resultado => {
      console.log(resultado);
      if (resultado.length == 0) {
        console.log(administrador.nome + "administrador não cadastrado ou nome incorreto " + administrador.senha+"senha incorreta");
      }
      else {
        this.rotas.navigate(['/usuario/administrador']);
        sessionStorage.setItem('id', resultado[0].id);
        console.log(resultado[0].id);
      }
    });
}
}   
    