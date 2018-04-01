import { Injectable } from '@angular/core';
import { Fotos } from '../models/fotos';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class FotosService {

  fotosList: AngularFireList<any>;
  selectedFotos: Fotos = new Fotos();	

constructor(private firebase: AngularFireDatabase) { }

  getFotos()
  {
    return this.fotosList = this.firebase.list('Fotos');
  }
}
