import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Setor } from '../modelos/setor';
<<<<<<< HEAD
import { viagem } from '../modelos/viagem';
import { Usuario } from '../modelos/usuario';
import { ViagemService } from './viagem.service';

=======
import { MessageService } from 'primeng/api';
import { viagem } from 'PrimeiroP/src/app/viagem/viagem';
import { Usuario } from 'PrimeiroP/src/app/usuario/usuario';
>>>>>>> 5cd32f858571291f4bac2b31b7f4873c57655ae7

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  Viagem:viagem;

  setorCollection : AngularFirestoreCollection<Setor>;

<<<<<<< HEAD
  constructor(public angularFireStore:AngularFirestore,private rotas:Router, private viagemService: ViagemService) {
=======
  constructor(public angularFireStore:AngularFirestore,private rotas:Router,public messageService:MessageService) {
>>>>>>> 5cd32f858571291f4bac2b31b7f4873c57655ae7
    this.setorCollection= this.angularFireStore.collection<Setor> ("setor");

   }
  

  cadastrar(setor:Setor){
    if(setor.nome==null){
      this.messageService.add({severity:'error', summary:'Message', detail:'o nome do setor é obrigatório!'});
      console.log("o nome do setor é obrigatório! "+setor.nome);
    }
    else{
      console.log(setor);
      this.angularFireStore.collection<Setor>("setor", ref=>
      ref.where("nome",'==',setor.nome)).valueChanges().subscribe(setorCadastrado=>{
      if(setorCadastrado.length==0){
        console.log("setooor")
        console.log(setor.idUsuario)
        this.setorCollection.add(setor).then(setores =>{
          let userDoc= this.setorCollection.doc(setores.id);
          userDoc.update({id:setores.id})
          this.messageService.add({severity:'success', summary:'Message', detail:'setor cadastrado!'});
          
        });
      }

      if(setorCadastrado.length>0){
        this.messageService.add({severity:'error', summary:'Message', detail:'setor já estava cadastrado!'});
        console.log("o setor já está cadastrado "+setor.nome);
        console.log(setorCadastrado.length);
      }
     
     });
    }
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.setorCollection.snapshotChanges().subscribe(result => {
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
   
atualizarSetor(id){
  let viagem= this.angularFireStore.doc('setor/'+id);
  console.log(id);
  viagem.update({id:id});
  console.log("atualizarSetor")
  
}
setor:Setor;
id;


atualizarTodos(id,setor){
  let setorDoc=this.angularFireStore.doc('setor/'+id);
  console.log(id);
  console.log("antiga"+setor.nome+"");
  setorDoc.update({nome:setor.nome 
     
});
   console.log("atualizada=>"+setor.nome+"" );
   this.rotas.navigate(['/setor/visualizacao/'+id]);
}

  
  listarPorId(setor) {
    return new Observable(observer => {
      let doc = this.setorCollection.doc(setor);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
        
      });
    });
  }


  getSetoresUsuario() {
     return this.angularFireStore.collection<Setor>("setor", ref=>  
      ref.where ("setorUsuario",'==',sessionStorage.getItem('setor')))
      .valueChanges();
      
    }
    
    getViagensCoordenacao() {
      return this.angularFireStore.collection<viagem>("viagem", ref=>  
       ref.where ("idUsuario",'==',sessionStorage.getItem('id')))
       .valueChanges();
       
     }
     setores:Setor[];
     usuarios: Usuario[];
     usuario:Usuario;
     vetor: Setor[];

     verificarUsuario(){
      for(let i=0; i<this.usuarios.length; i++){
        if (this.usuarios[i].idSetor==this.vetor[i].id){
          this.viagemService.listarPorId(this.usuarios[i]);
          for(let i=0; i<this.vetor.length; i++){
            this.vetor[i]=this.usuario[i];
            console.log(this.vetor);
          }
  
        }
        
      }
  
    }
  
       
      
  

  deletar(setor): Promise<void> {
    console.log("deletado com sucesso 0!");
    return this.setorCollection.doc(setor).delete();
    
 
  }  
  atualizar(){
    this.rotas.navigate(['/setor/cadastro']);
  }

  getViagensUsuarioMesmoSetor(usuario) {
    return this.angularFireStore.collection<Usuario>("usuario", ref=>  
     ref.where ("idSetor",'==',usuario.idSetor))
     .valueChanges();
     
   }
  

  
}
