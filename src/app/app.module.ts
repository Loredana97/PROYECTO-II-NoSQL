import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

//Imports para usar Firestore:
//import { AngularFirestoreModule } from 'angularfire2/firestore';
//import { AngularFireModule } from 'angularfire2';

//Imports para usar RealTime DB:
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

//Import de la conexión con Firebase:
import { environment } from '../environments/environment';

//Import de los Componentes (components):
import { DatosComponent } from './components/datos/datos.component';
import { FaunaListComponent } from './components/datos/fauna-list/fauna-list.component';
import { FloraListComponent } from './components/datos/flora-list/flora-list.component';
import { FaunaComponent } from './components/datos/fauna/fauna.component';
import { FloraComponent } from './components/datos/flora/flora.component';
import { FotosComponent } from './components/datos/fotos/fotos.component'

//Import de los Servicios (services):
import { FaunaService } from './services/fauna.service';
import { FloraService } from './services/flora.service';
import { FotosService } from './services/fotos.service';

//Import del Toastr:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: 
  [
    AppComponent,
    DatosComponent,
    FaunaComponent,
    FloraComponent,
    FaunaListComponent,
    FloraListComponent,
    FotosComponent
  ],
  imports: 
  [
    BrowserModule,

    //Para RealTime DB:
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
	   FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

    //Para Firestore:
    //AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    //AngularFirestoreModule
  ],
  providers: [FaunaService, FloraService, FotosService],
  bootstrap: [AppComponent]
})

export class AppModule { }