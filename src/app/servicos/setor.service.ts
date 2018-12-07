import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Setor } from '../modelos/setor';
import { viagem } from '../modelos/viagem';
import { Usuario } from '../modelos/usuario';
import { ViagemService } from './viagem.service';


@Injectable({
  providedIn: 'root'
})
export class SetorService {
  Viagem:viagem;

  setorCollection : AngularFirestoreCollection<Setor>;

  constructor(public angularFireStore:AngularFirestore,private rotas:Router, private viagemService: ViagemService) {
    this.setorCollection= this.angularFireStore.collection<Setor> ("setor");
   }
  //  salvar(viagem: viagem){
  //   this.viagemCollection.add(viagem).then(resultado => {
  //     viagem.id = resultado.id;
  //     console.log("cadastrado");
  //  });
  // }

  cadastrar(setor:Setor){
    if(setor.nome=="")
    {console.log("o nome do setor é obrigatório");}
   
    else{
    this.setorCollection.add(setor).then(resultado =>{
    let userDoc= this.setorCollection.doc(resultado.id);
    userDoc.update({id:resultado.id})
    this.rotas.navigate(['/visita/listar']);
    // console.log("setor de id"+setor.id); setor n definido
    // console.log("setor de id"+setor.nome);
    

    });}
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
  

  
}
