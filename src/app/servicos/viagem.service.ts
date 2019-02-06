import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { viagem } from '../modelos/viagem';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Usuario} from '../modelos/usuario'
import { UsuarioComponent } from '../cadastrar-usuario/usuario.component';


@Injectable({
  providedIn: 'root'
})
export class ViagemService {
 

  viagemCollection : AngularFirestoreCollection<viagem>;

  constructor(public angularFireStore:AngularFirestore,private rotas:Router) {
    this.viagemCollection= this.angularFireStore.collection<viagem> ("viagem");
   }
  //  salvar(viagem: viagem){
  //   this.viagemCollection.add(viagem).then(resultado => {
  //     viagem.id = resultado.id;
  //     console.log("cadastrado");
  //  });
  // }

  salvar(viagem:viagem){
    if(viagem.empresa=="")
    {console.log("o campo empresa é obrigatório");}
    if(viagem.professor=="")
    {console.log("o campo professor é obrigatório");}
    if(viagem.cidade=="")
    {console.log("o campo cidade é obrigatório");}
    if(viagem.data=="")
    {console.log("o campo data é obrigatório");}
    if(viagem.horarioSaida=="")
    {console.log("o campo horário de saída é obrigatório");}
    if(viagem.horarioRetorno=="")
    {console.log("o campo horário de retorno é obrigatório");}
    if(viagem.componente=="")
    {console.log("o campo componente é obrigatório");}
    if(viagem.conteudo=="")
    {console.log("o campo conteúdo é obrigatório");}
    if(viagem.cargaHoraria==null)
    {console.log("o campo carga horária é obrigatório");}
    if(viagem.turma=="")
    {console.log("o campo turma é obrigatório");}
    if(viagem.quantidadeAlunos==null)
    {console.log("o campo quantitativo de alunos é obrigatório");}
    if(viagem.endereco=="")
    {console.log("o campo endereço é obrigatório");}
    if(viagem.servidor=="")
    {console.log("o campo servidor é obrigatório");}
    if(viagem.justificativa=="")
    {console.log("o campo justificativa é obrigatório");}
    if(viagem.objetivo=="")
    {console.log("o campo objetivo é obrigatório");}
    if(viagem.metodologia=="")
    {console.log("o campo metodologia de alunos é obrigatório");}
    if(viagem.formasAprendizagem=="")
    {console.log("o campo formas de aprendizagem é obrigatório");}
    else{
    this.viagemCollection.add(viagem).then(resultado =>{
    let userDoc= this.viagemCollection.doc(resultado.id);
    userDoc.update({id:resultado.id})
    console.log(viagem.id +"= id viagem");
    userDoc.update({idUsuario: sessionStorage.getItem('id')})
    console.log(viagem.idUsuario+" idDo usuario");
    this.rotas.navigate(['/visita/listar/'+viagem.idUsuario]);
    

    });}
  }

  listarTodos(): Observable<any[]> {
    let resultados: any[] = [];
    let meuObservable = new Observable<any[]>(observer => {
      this.viagemCollection.snapshotChanges().subscribe(result => {
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
   
atualizarViagem(id){
  let viagem= this.angularFireStore.doc('viagem/'+id);
  console.log(id);
  viagem.update({id:id});
  console.log("atualizarViagem")
  
}
viagem:viagem;
id;


atualizarTodos(id, viagem){
  let viagemDoc=this.angularFireStore.doc('viagem/'+id);
  console.log(id);
  console.log("antiga"+viagem.empresa+"");
  viagemDoc.update({empresa:viagem.empresa, cidade: viagem.cidade, roteiro: viagem.roteiro,
  data: viagem.data, horarioSaida: viagem.horarioSaida, horarioRetorno: viagem.horarioRetorno,
  professor: viagem.professor, componente: viagem.componente, conteudo: viagem.conteudo,
  cargaHoraria: viagem.cargaHoraria, turma: viagem.turma, quantidadeAlunos: viagem.quantidadeAlunos,
  hospedagem: viagem.hospedagem, endereco: viagem.endereco, servidor: viagem.servidor,
  justificativa: viagem.justificativa, objetivo: viagem.objetivo, metodologia: viagem.metodologia, formasAprendizagem: viagem.formasAprendizagem 
     
});
   console.log("atualizada=>"+viagem.empresa+"" );
   this.rotas.navigate(['/visita/visualizacao/'+id]);
}

  
  listarPorId(viagem) {
    return new Observable(observer => {
      let doc = this.viagemCollection.doc(viagem);
      doc.snapshotChanges().subscribe(result => {
        let id = result.payload.id;
        let data = result.payload.data()
        let document = { id: id, ...data };
        observer.next(document);
        observer.complete();
        
      });
    });
  }









  
  getViagensUsuario() {
     if(sessionStorage.getItem('ehCoordenador')=='false'){
     console.log("está logado como servidor");
     return this.angularFireStore.collection<viagem>("viagem", ref=>  
     ref.where ("idUsuario",'==',sessionStorage.getItem('id')))
      .valueChanges()
      } 
    else{
      console.log("está logado como coordenaodr");
      console.log("listar igual a esse= "+sessionStorage.getItem('idUsuarioRota'));
      return this.angularFireStore.collection<viagem>("viagem", ref=>  
      ref.where ("idUsuario",'==',sessionStorage.getItem('idUsuarioRota')))
      .valueChanges()
      }   
    }












    getUsuariosSetor() {
      return this.angularFireStore.collection<Usuario>("usuario", ref=>
       ref.where ("idSetor",'==',sessionStorage.getItem('idSetor')))
       .valueChanges();
     }
  
   
       
      


   
    
  

  deletar(viagem): Promise<void> {
    console.log("deletado com sucesso 0!");
    return this.viagemCollection.doc(viagem).delete();
   
 
  }  
  atualizar(){
    this.rotas.navigate(['/usuario/cadastro']);
  }
  
  irParaAlterar(id){
    this.rotas.navigate(['visita/atualizar/'+ id])
  }
  
}
