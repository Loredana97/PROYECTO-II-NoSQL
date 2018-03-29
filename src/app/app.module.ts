import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

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
import { ListaFaunaFloraComponent } from './components/datos/lista-fauna-flora/lista-fauna-flora.component';
import { FaunaFloraComponent } from './components/datos/fauna-flora/fauna-flora.component';

//Import de los Servicios (services);
import { FaunaFloraService } from './services/fauna-flora.service';


@NgModule({
  declarations: 
  [
    AppComponent,
    DatosComponent,
    ListaFaunaFloraComponent,
    FaunaFloraComponent
  ],
  imports: 
  [
    BrowserModule,

    //Para RealTime DB:
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

    //Para Firestore:
    //AngularFireModule.initializeApp(environment.firebase, 'angular-fs'),
    //AngularFirestoreModule
  ],
  providers: [FaunaFloraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
