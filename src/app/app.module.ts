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
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioService } from './usuario.service';
import { ViagemComponent } from './viagem/viagem.component';
import { ViagemService } from './viagem.service';
import { ListarViagemComponent } from './listar-viagem/listar-viagem.component';
import { VisualizacaoViagemComponent } from './visualizacao-viagem/visualizacao-viagem.component';
import { AlterarViagemComponent } from './alterar-viagem/alterar-viagem.component';
import { TableModule} from 'primeng/table';
import { AlterarUsuarioComponent } from './alterar-usuario/alterar-usuario.component';
import { ListarUsuarioComponent } from './listar-usuario/listar-usuario.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
//import {BreadcrumbModule} from 'primeng/breadcrumb';



export const rotas : Routes = [ 
  {path: "usuario/cadastro", component:UsuarioComponent},
  {path: "visita/cadastro", component:ViagemComponent},
  {path: "visita/listar", component:ListarViagemComponent},
  {path: "usuario/listar", component:ListarUsuarioComponent},
  {path: "visita/visualizacaoViagem", component:VisualizacaoViagemComponent},
  {path: "", component:LoginComponent},
  {path: "menu", component:MenuComponent},
 


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
  //  BreadcrumbModule,
  
    
    

  
    
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
  // BreadcrumbModule
   


    
  ],
  
  providers: [ViagemService, AngularFirestore, UsuarioService],
  bootstrap: [AppComponent]
  
})

export class AppModule { 

}

