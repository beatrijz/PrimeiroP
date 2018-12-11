import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {  Usuario } from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Coordenador } from '../modelos/coordenador';
import { SetorService } from './setor.service';
import { viagem } from '../modelos/viagem';
//import { MessageService } from 'primeng/api';




@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarioCollection : AngularFirestoreCollection<Usuario>;
  private usuarioAutenticado:boolean=false;
 usuarios:Usuario[];
 viagem:viagem;
 

  

  constructor(public angularFireStore:AngularFirestore,private rotas:Router,public messageService:MessageService, public setorService: SetorService
    ) {
    this.usuarioCollection= this.angularFireStore.collection<Usuario> ("usuario");
  }


  atualizarTodos(id, usuario){
    let usuarioDoc=this.angularFireStore.doc('usuario/'+id);
    usuarioDoc.update({siape:usuario.siape, senha: usuario.senha, nome: usuario.nome,ehCoordenador:usuario.ehCoordenador});
    this.listarTodos();
    
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
        console.log(resultado.length);

      if(resultado.length == 0){
        console.log(resultado.length);
        this.usuarioCollection.add(usuario).then(resultadoUsuario =>{
          let userDoc= this.usuarioCollection.doc(resultadoUsuario.id);
          userDoc.update({id:resultadoUsuario.id});
          console.log(usuario.nome+" cadastrado!");
          this.rotas.navigate(['/visita/listar/'+resultadoUsuario.id]);
          return;
        });
      }else{
        console.log(resultado.length);
        console.log(usuario.nome+" já existente!");
        this.messageService.add({severity:'error', summary:'Service Message', detail: usuario.nome+" já existente!"});
        return;
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


  listarUsuariosPorSetor(): Observable<any[]>{
    let resultados: any[] = [];
    let idSetor=sessionStorage.getItem('idSetor');
    let meuObservable = new Observable<any[]>(observer => {
    this.angularFireStore.collection<Usuario>("usuario", ref=>
    ref.where("idSetor",'==',idSetor))
    .snapshotChanges().subscribe(result=>{
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
    .where("senha", "==", usuario.senha))
    .valueChanges().subscribe(resultado=>{
      sessionStorage.setItem('id',null);
      if(resultado.length>0){
        if(usuario.senha=="1" && usuario.siape==1){
            this.rotas.navigate(['/administrador/listarTodosUsuarios']);
            sessionStorage.setItem('ehCoordenador','false');
            sessionStorage.setItem('ehAdm',"true");
            return;
           }
        else{

          usuario.id=resultado[0].id;
          console.log(resultado[0])
          this.setorService.listarTodos().subscribe(setores=>{
            for(let i =0;i<setores.length; i++){
              if(usuario.id == setores[i].idUsuario){
                sessionStorage.setItem('id',usuario.id);
                sessionStorage.setItem('idSetor',setores[i].id);
                sessionStorage.setItem('ehCoordenador','true');
                console.log("id coordenador"+sessionStorage.setItem('id',usuario.id));
                console.log(sessionStorage.getItem('ehCoordenador'));
                this.rotas.navigate(['/coordenador/ListagemUsuarios']);
                this.messageService.add({severity:'success', summary:'Message', detail:'login realizado com sucesso!'});
                return;
              } 
            } 
            usuario.id=resultado[0].id;
            sessionStorage.setItem('id',resultado[0].id);
            sessionStorage.setItem('ehCoordenador','false');
            console.log(sessionStorage.getItem('ehCoordenador'));
            console.log("id usuario"+sessionStorage.getItem('id'));
            this.rotas.navigate(['/visita/listar/'+usuario.id]);
            this.messageService.add({severity:'success', summary:'Parabéns', detail:'login realizado com sucesso!'});
            return;
          });
        }
      }else{
        this.messageService.add({severity:'error', summary:'erro de Autenticação', detail:'O usuário não existe!'});
      }
   }); 
  }
  
  
  
  Sair(){
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('ehCoordenador');
    sessionStorage.removeItem('idUsuario');
    this.irTelaLogin();
  }
  


  irTelaLogin(){
    this.rotas.navigate(['/'])
  }

  irTelaCadastro(){
    this.rotas.navigate(['/usuario/cadastro']);
  }

  irTelaAlterar(idUsuario){
    this.rotas.navigate(['usuario/atualizar/'+idUsuario]);
  }



  atualizarViagem(id){
    let viagem= this.angularFireStore.doc('viagem/'+id);
    viagem.update({id:id});
    
    
  }
  
  
  
  
}