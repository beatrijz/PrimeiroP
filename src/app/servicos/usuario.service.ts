import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Coordenador } from '../modelos/coordenador';
import { SetorService } from './setor.service';
//import { MessageService } from 'primeng/api';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioAutenticado:boolean=false;
 usuarios:Usuario[];
 

  

  constructor(public angularFireStore:AngularFirestore,private rotas:Router,public messageService:MessageService, public setorService: SetorService
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

      if(resultado.length == 0){
        this.usuarioCollection.add(usuario).then(resultadoUsuario =>{
          let userDoc= this.usuarioCollection.doc(resultadoUsuario.id);
          userDoc.update({id:resultadoUsuario.id});
          console.log(usuario.nome+" cadastrado!");
          this.rotas.navigate(['/visita/listar']);

        });
      }else if(resultado.length==1){
        console.log(usuario.nome+" já existente!");
        this.messageService.add({severity:'error', summary:'Service Message', detail: usuario.nome+" já existente!"});
        
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
      

      if(resultado.length>0){
        usuario.id=resultado[0].id;
        this.setorService.listarTodos().subscribe(setores=>{
          for(let i =0;i<setores.length; i++){
            if(setores[i].idUsuario == usuario.id){
             usuario.ehCoordenador = true;
              if(usuario.ehCoordenador==true){
                sessionStorage.setItem('id',resultado[0].id);
                this.rotas.navigate(['/coordenador/menu']);
                this.messageService.add({severity:'success', summary:'Message', detail:'login realizado com sucesso!'});
         
              }
            }
            else{
              usuario.id=resultado[0].id;
              sessionStorage.setItem('id',resultado[0].id);
              this.rotas.navigate(['/visita/listar']);
              this.messageService.add({severity:'success', summary:'Parabéns', detail:'login realizado com sucesso!'});
            }
          } 
        });
      }
      
      else if(usuario.senha=="1234567"&& usuario.senha=="1234567"){
        this.rotas.navigate(['/administrador/menu']);

      }
      
      else {
        this.messageService.add({severity:'error', summary:'erro de Autenticação', detail:'O usuário não existe!'});
      };
    });  
  }   
    

    
  
  
  
  Sair(){
    sessionStorage.removeItem('id');
    this.irTelaLogin();
  }
  


  irTelaLogin(){
    this.rotas.navigate(['/'])
  }

  irTelaCadastro(){
    this.rotas.navigate(['/usuario/cadastro']);
  }



  atualizarViagem(id){
    let viagem= this.angularFireStore.doc('viagem/'+id);
    viagem.update({id:id});
    
    
  }
  
  atualizarTodos(id, usuario){
    let usuarioDoc=this.angularFireStore.doc('usuario/'+id);
    usuarioDoc.update({siape:usuario.siape, senha: usuario.senha, nome: usuario.nome});
    this.listarTodos();
   
    
  }
  
  
}