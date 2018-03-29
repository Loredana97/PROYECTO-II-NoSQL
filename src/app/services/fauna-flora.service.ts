import { Injectable } from '@angular/core';

//Imports de Firebase:
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Import del Modelo:
import { FaunaFlora } from '../models/fauna-flora';

//Acá van los métodos de añadir, eliminar y modificar los datos:
@Injectable()
export class FaunaFloraService {

  faunafloraList: AngularFireList<any>;
  selectedDato: FaunaFlora = new FaunaFlora();

  constructor(private firebase: AngularFireDatabase) { }

  //Obtener el animal o planta que agregue:
  getDatos()
  {
    return this.faunafloraList = this.firebase.list('Fauna-Flora');
  }

  insertDatos(dato: FaunaFlora)
  {
    this.faunafloraList.push({
      nombre: dato.nombre,
      categoria: dato.categoria,
      dieta: dato.dieta,
      estado: dato.estado
    });
  }

  updateDatos(dato: FaunaFlora)
  {
    this.faunafloraList.update(dato.$key, 
    {
      nombre: dato.nombre,
      categoria: dato.categoria,
      dieta: dato.dieta,
      estado: dato.estado
    });
  }

  deleteDatos($key: string)
  {
    this.faunafloraList.remove($key);
}

}
