import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Coordenador } from '../modelos/coordenador';
//import { MessageService } from 'primeng/api';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioAutenticado:boolean=false;
 usuarios:Usuario[];
 

  

  constructor(public angularFireStore:AngularFirestore,private rotas:Router,public messageService:MessageService
    ) {
    this.usuarioCollection= this.angularFireStore.collection<Usuario> ("usuario");
  }
  
  cadastrar(usuario:Usuario){
    if(usuario.senha==""){
      console.log("campo senha é obrigatóro");
      this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});
    }
    if(usuario.siape==null){
      console.log("campo siape é obrigatóro");
    }
    if(usuario.siape==null){
      console.log("campo setor é obrigatóro");
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
          userDoc.update({id:resultadoUsuario.id});
          console.log(usuario.nome+"usuário cadastrado!");
          this.rotas.navigate(['/visita/listar']);

        });
      }else{
        console.log("usuário já está cadastrado!");
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

  listarPorId(usuario) {
    return new Observable(observer => {
      let doc = this.usuarioCollection.doc(usuario);
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


      if( resultado.length > 0){
        // verificar se ele é coordenador
        // boolean eCoordenador
        // this.setorService.listarTodos().subscribe(setores=>{
          // percorrer todos os setores, verificar se o idusiario de setor é igual ao id do usuário logado.
          // se algum dos setores tiver, ele é coordenador
          // se n , ele não é coordenador
      //   })
      }

      if( resultado.length == 0){
      
      }else{
        this.messageService.add({severity:'success', summary:'Message', detail:'login realizado com sucesso!'});
        sessionStorage.setItem('id',resultado[0].id);
        console.log(resultado[0].id);
        this.rotas.navigate(['/usuario/menu'])
      }
    });
    
  }

  
    Sair(){
      sessionStorage.removeItem('id');
    }
  


  irTelaLogin(){
    this.rotas.navigate(['/'])
  }

  irTelaCadastro(){
    this.rotas.navigate(['/usuario/cadastro']);
    console.log("vai");
  }



  atualizarViagem(id){
    let viagem= this.angularFireStore.doc('viagem/'+id);
    console.log(id);
    viagem.update({id:id});
    console.log("atualizarViagem")
    
  }
  usuario:Usuario;
  id;
  
  
  atualizarTodos(id, usuario){
    let usuarioDoc=this.angularFireStore.doc('usuario/'+id);
    console.log(id);
    console.log("antiga"+usuario.siape+"");
    usuarioDoc.update({siape:usuario.siape, senha: usuario.senha, nome: usuario.nome
       
  });
     console.log("atualizada=>"+usuario.senha+"" );
     this.rotas.navigate(['/'+id]);
  }
  
   atualizar(){
    this.rotas.navigate(['/usuario/cadastro']);

  }
  
}