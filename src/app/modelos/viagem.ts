import { Usuario } from "./usuario";

export interface viagem{
    empresa:string ;
    cidade:string ;
    roteiro:String; 
    data:string;
    horarioSaida:String;
    horarioRetorno:String;
    professor:string;
    componente:String;
    conteudo:string ;
    cargaHoraria:number;
    turma:string ;
    quantidadeAlunos:number ;
    hospedagem?:String ;
    endereco:String ;
    servidor:String ;
    justificativa:String ;
    objetivo:String;
    metodologia:String ;
    formasAprendizagem:String ;
    id?:String ;
    idUsuario?: String ;

}