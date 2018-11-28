import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//import { MessageService } from 'primeng/api';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioAutenticado:boolean=false;
 usuarios:Usuario[];
 

  

  constructor(public angularFireStore:AngularFirestore,private rotas:Router,//private messageService: MessageService
    ) {
    this.usuarioCollection= this.angularFireStore.collection<Usuario> ("usuario");
  }
  
  cadastrar(usuario:Usuario){
    if(usuario.senha==""){
      console.log("campo senha é obrigatóro");
      //this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});
    }
    if(usuario.siape==null){
      console.log("campo siape é obrigatóro");
    }
    if(usuario.nome==""){
      console.log("campo nome é obrigatóro");

    } else {
      this.angularFireStore.collection<Usuario>("usuario", ref=>
      ref.where("siape",'==',usuario.siape))
      .valueChanges().subscribe(resultado=>{ 

      if( resultado.length == 0){
        this.usuarioCollection.add(usuario).then(resultadoUsuario =>{
          let userDoc= this.usuarioCollection.doc(resultadoUsuario.id);
          userDoc.update({id:resultadoUsuario.id})
          console.log(usuario.nome+"usuário cadastrado!");
        });
      }else{
        console.log("usuário não cadastrado!");
      }
    });
   }
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

  listarEspecifico(){

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
    
  }

  

  fazerLogin(usuario:Usuario){
    this.angularFireStore.collection<Usuario>("usuario", ref=>
    ref.where("siape",'==',usuario.siape)
    .where("senha", "==", usuario.senha) )
    .valueChanges().subscribe(resultado=>{
    console.log(resultado);

      if( resultado.length == 0){
        console.log (usuario.nome+"usuario não cadastrado ou senha ou nome  incorreta " + usuario.senha);
      }else{
        this.rotas.navigate(['/visita/listar'])
        sessionStorage.setItem('id',resultado[0].id);
        console.log(resultado[0].id);
      }
    });
  }


  irTelaLogin(){
    this.rotas.navigate(['/'])
  }

  irTelaCadastro(){
    this.rotas.navigate(['/usuario/cadastro']);
    console.log("vai");
  }

  
}