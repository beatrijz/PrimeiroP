import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioAutenticado:boolean=false;
 usuarios:Usuario[];
 

  

  constructor(public angularFireStore:AngularFirestore,private rotas:Router) {
    this.usuarioCollection= this.angularFireStore.collection<Usuario> ("usuario");
  }

  salvar(usuario:Usuario){
    this.usuarioCollection.add(usuario).then(resultado => {
    usuario.id = resultado.id;
    console.log(usuario.nome+"cadastrado com sucesso!")
    

    });
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

  listarPorId(usuarioId) {
    return new Observable(observer => {
      let doc = this.usuarioCollection.doc(usuarioId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }

  deletar(usuario): Promise<void> {
   
    return this.usuarioCollection.doc(usuario).delete();
    console.log("deletado com sucesso!");
  }

  

  fazerLogin(usuario:Usuario){
    // Fazer uma consulta no documents usuário, procurar por um com nome e senha iguais ao que veio no parâmetro

    //this.usuarioCollection.doc(usuario.nome)
    this.angularFireStore.collection<Usuario>("usuario", ref=>
    ref.where("nome",'==',usuario.nome)
    .where("senha", "==", usuario.senha) )
    .valueChanges().subscribe(resultado=>{
      console.log(resultado);
      

      if( resultado.length == 0){
        console.log (usuario.nome+"usuario não cadastrado ou senha ou nome  incorreta " + usuario.senha);
      }else{
        this.rotas.navigate(['/visita/listar'])
      }
    });
  }

  irTelaLogin(){
    this.rotas.navigate(['/usuario/cadastro'])
  }

  
}