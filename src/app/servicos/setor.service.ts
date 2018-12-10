import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Setor } from '../modelos/setor';
import { MessageService } from 'primeng/api';
import { Usuario } from '../modelos/usuario';


@Injectable({
  providedIn: 'root'
})
export class SetorService {

  setorCollection : AngularFirestoreCollection<Setor>;

  constructor(public angularFireStore:AngularFirestore,private rotas:Router,public messageService:MessageService) {
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
        console.log(setor.idUsuario)
        this.setorCollection.add(setor).then(setores =>{
          console.log(setores.id);
          let userDoc= this.setorCollection.doc(setores.id);
          userDoc.update({id:setores.id})
          this.messageService.add({severity:'success', summary:'Success Message', detail:'Order submitted'});
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
   
  
  



atualizarTodos(id,setor){
  let setorDoc=this.angularFireStore.doc('setor/'+id);
  setorDoc.update({nome:setor.nome,idUsuario:setor.idUsuario
     
});
   console.log("atualizada para=> "+ setor.nome+"" );
   console.log("atualizada para=> "+ setor.idUsuario+"" );
   
   //this.rotas.navigate(['/setor/visualizacao/'+id]);
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
  
       
      
  

  deletar(setor): Promise<void> {
    return this.setorCollection.doc(setor).delete();
    
 
  }  

  irParaAlterar(id){
    this.rotas.navigate(['visita/atualizar/'+ id])
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
