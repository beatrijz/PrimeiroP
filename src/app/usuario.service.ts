import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from './usuario/usuario';
import { Observable } from 'rxjs';
import { NavigationEnd } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;

  constructor(public angularFireStore:AngularFirestore) {
    this.usuarioCollection= this.angularFireStore.collection<Usuario> ("usuario");
   }
   salvar(usuario:Usuario){
     this.usuarioCollection.add(usuario).then(resultado => {
       usuario.id = resultado.id;
    });
   }
   deletar(usuario): Promise<void> {
    return this.usuarioCollection.doc(usuario).delete();
    
  }
  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.usuarioCollection.snapshotChanges().subscribe(result => {
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
  
 usuario:Usuario;
  login(nome,senha){
  
    if(senha == this.usuarioCollection.doc(this.usuario.senha) && nome == this.usuarioCollection.doc(this.usuario.nome)){
    



  }
 
}}
