import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule} from 'primeng/menu';
import { RouterModule, Routes } from '@angular/router';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
import { configuracao } from 'src/environments/Firebase';
import { UsuarioComponent } from './cadastrar-usuario/usuario.component';
import { UsuarioService } from './servicos/usuario.service';
import { ViagemComponent } from './cadastrar-viagem/viagem.component';
import { ViagemService } from './servicos/viagem.service';
import { ListarViagemComponent } from './listar-viagem/listar-viagem.component';
import { VisualizacaoViagemComponent } from './visualizacao-viagem/visualizacao-viagem.component';
import { AlterarViagemComponent } from './alterar-viagem/alterar-viagem.component';
import { TableModule} from 'primeng/table';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { LoginComponent } from './login/login.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabMenuModule} from 'primeng/tabmenu';
import { CadastrarCoordenadorComponent } from './cadastrar-coordenador/cadastrar-coordenador.component';
import { CoordenadorService } from './servicos/coordenador.service';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';



//import {MessageService} from 'primeng//api';
import { CadastrarSetorComponent } from './cadastrar-setor/cadastrar-setor.component';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem, MessageService} from 'primeng/api';
import {SpinnerModule} from 'primeng/spinner';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import { MessageServiceDemo } from '../message/message';
import { ListarCoordenadorComponent } from './listar-coordenador/listar-coordenador.component';
import { MenuCoordenadorComponent } from './menu-coordenador/menu-coordenador.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MenuUsuarioComponent } from './menu-usuario/menu-usuario.component';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {DropdownModule} from 'primeng/dropdown';
import { ListarSetorComponent } from './listar-setor/listar-setor.component';
import { AlterarSetorComponent } from './alterar-setor/alterar-setor.component';
import { ParecerService } from './servicos/parecer.service';
import { ListarParecerComponent } from './listar-parecer/listar-parecer.component';
import { AlterarParecerComponent } from './alterar-parecer/alterar-parecer.component';
import { ListagemParaCoordenadorComponent } from './listar-usuarios-por-setor/listagem-para-coordenador.component';
// import { VisitaComponent } from './listar/visita/visita.component';
// import { ListarVisitaComponent } from './listar-visita/listar-visita.component';






export const rotas : Routes = [ 
  {path: "usuario/cadastro", component:UsuarioComponent},
  {path: "visita/cadastro", component:ViagemComponent},
  {path: "visita/listar/:id", component:ListarViagemComponent},
  {path: "administrador/listarTodosUsuarios", component:ListarUsuarioComponent},
  {path: "setor/listar", component:ListarSetorComponent},
  {path: "visita/visualizacao/:id", component:VisualizacaoViagemComponent},
  {path: "setor/visualizacao/:id", component:VisualizacaoViagemComponent},
  {path: "", component:LoginComponent},
  {path: "usuario/menu", component:MenuUsuarioComponent},
  {path: "coordenador/menu", component:MenuCoordenadorComponent},
  {path: "administrador/menu", component:MenuAdministradorComponent},
  {path: "visita/atualizar/:id", component:AlterarViagemComponent},
  {path: "usuario/atualizar/:id", component:AlterarUsuarioComponent},
  {path: "setor/atualizar/:id", component:AlterarSetorComponent},
  {path: "coordenador/cadastro", component:CadastrarCoordenadorComponent},
  {path: "setor/cadastro", component:CadastrarSetorComponent},
  {path: "coordenador/ListagemUsuarios", component:ListagemParaCoordenadorComponent},
  {path: "coordenador/Parecer/Listar", component:ListarParecerComponent},
  {path: "coordenador/Parecer/atualizar/:id", component:AlterarParecerComponent}
 



];

@NgModule({
  declarations: [
    AppComponent,
    ViagemComponent,
    UsuarioComponent,
    ViagemComponent,
    ListarViagemComponent,
    VisualizacaoViagemComponent,
    AlterarViagemComponent,
    AlterarUsuarioComponent,
    ListarUsuarioComponent,
    LoginComponent,
    CadastrarSetorComponent,
    CadastrarCoordenadorComponent,
    MenuAdmComponent,
    ListarCoordenadorComponent,
    MenuCoordenadorComponent,
    MenuAdministradorComponent,
    MenuUsuarioComponent,
    ListagemParaCoordenadorComponent,
    ListarSetorComponent,
    AlterarSetorComponent,

    ListarParecerComponent,
    AlterarParecerComponent,
    
   
    
    // VisitaComponent,
    // ListarVisitaComponent,
    

    
   
   
  
    
    

  
    
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenuModule,
    RouterModule.forRoot(rotas),
    FullCalendarModule,
    AngularFireModule.initializeApp(configuracao),
    TableModule,
    BreadcrumbModule,
    TabMenuModule,
    MenubarModule,
    SpinnerModule,
    CalendarModule,
    BrowserAnimationsModule,
    ToastModule,
    DropdownModule
    // MessageServiceDemo,
      //MessageService,
    //Message
    
    
   


    
  ],
  
  providers: [ViagemService,AngularFirestore, UsuarioService, CoordenadorService,MessageService, ParecerService],
  bootstrap: [AppComponent]
  
})

export class AppModule { 

}


