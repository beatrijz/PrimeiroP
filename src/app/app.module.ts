import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {MenuModule, MenuItemContent} from 'primeng/menu';
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
import { MenuComponent } from './menu/menu.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TabMenuModule} from 'primeng/tabmenu';
import { CadastrarCoordenadorComponent } from './cadastrar-coordenador/cadastrar-coordenador.component';
import { CoordenadorService } from './servicos/coordenador.service';
import { CadastrarSetorComponent } from './cadastrar-setor/cadastrar-setor.component';


//import {MessageService} from 'primeng//api';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';





export const rotas : Routes = [ 
  {path: "usuario/cadastro", component:UsuarioComponent},
  {path: "visita/cadastro", component:ViagemComponent},
  {path: "visita/listar", component:ListarViagemComponent},
  {path: "usuario/listar", component:ListarUsuarioComponent},
  {path: "visita/visualizacao/:id", component:VisualizacaoViagemComponent},
  {path: "", component:LoginComponent},
  {path: "menu", component:MenuComponent},
  {path: "visita/atualizar/:id", component:AlterarViagemComponent},
  {path: "coordenador/cadastro", component:CadastrarCoordenadorComponent},
  {path: "setor/cadastro", component:CadastrarSetorComponent},


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
    MenuComponent,
    CadastrarSetorComponent,
    CadastrarCoordenadorComponent
   
   
  
    
    

  
    
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
    TabMenuModule
    //MessageService,
    //Message
    
    
   


    
  ],
  
  providers: [ViagemService,AngularFirestore, UsuarioService, CoordenadorService],
  bootstrap: [AppComponent]
  
})

export class AppModule { 

}

