import { Injectable } from '@angular/core';
import { Coordenador } from '../modelos/coordenador';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoordenadorService {
  coordenadorCollection : AngularFirestoreCollection<Coordenador>;
  coordenador:Coordenador[];

  constructor(public angularFireStore:AngularFirestore,private rotas:Router) {
    this.coordenadorCollection= this.angularFireStore.collection<Coordenador> ("coordenador");
   }

   cadastrar(coordenador:Coordenador){
    if(coordenador.senha==""){
      console.log("campo senha é obrigatóro");
      //this.messageService.add({severity:'error', summary:'Service Message', detail:'Via MessageService'});
    }
    if(coordenador.siape==null){
      console.log("campo siape é obrigatóro");
    }
    if(coordenador.nome==""){
      console.log("campo nome é obrigatóro");

    } else {
      this.angularFireStore.collection<Coordenador>("coordenador", ref=>
      ref.where("siape",'==',coordenador.siape))
      .valueChanges().subscribe(resultado=>{ 

      if( resultado.length == 0){
        this.coordenadorCollection.add(coordenador).then(resultadoCoordenador =>{
          let userDoc= this.coordenadorCollection.doc(resultadoCoordenador.id);
          userDoc.update({id:resultadoCoordenador.id})
          console.log(coordenador.nome+"usuário cadastrado!");
          this.rotas.navigate(['/visita/listar']);

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
      this.coordenadorCollection.snapshotChanges().subscribe(result => {
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

  listarPorId(coordenadorId) {
    return new Observable(observer => {
      let doc = this.coordenadorCollection.doc(coordenadorId);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
      });
    });
  }

  deletar(coordenador): Promise<void> {
    return this.coordenadorCollection.doc(coordenador).delete();
    
  }

  

  fazerLogin(coordenador:Coordenador){
    this.angularFireStore.collection<Coordenador>("coordenador", ref=>
    ref.where("siape",'==',coordenador.siape)
    .where("senha", "==", coordenador.senha) )
    .valueChanges().subscribe(resultado=>{
    console.log(resultado);

      if( resultado.length == 0){
        console.log (coordenador.nome+"usuario não cadastrado ou senha ou nome  incorreta " + coordenador.senha);
      }else{
        this.rotas.navigate(['/visita/listar'])
        // sessionStorage.setItem('id',resultado[0].id);
        console.log(resultado[0].id);
      }
    });
  }


  irTelaLogin(){
    this.rotas.navigate(['/'])
  }

  irTelaCadastro(){
    this.rotas.navigate(['/coordenador/cadastro']);
    console.log("vai");
  }

  
}
