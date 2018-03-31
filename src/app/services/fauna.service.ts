import { Injectable } from '@angular/core';

//Import de Firebase:
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Import del Modelo:
import { Fauna } from '../models/fauna';


@Injectable()
export class FaunaService 
{

  faunaList: AngularFireList<any>;
  selectedFauna: Fauna = new Fauna();

  constructor(private firebase: AngularFireDatabase) { }

  getFauna()
  {
    return this.faunaList = this.firebase.list('Fauna');
  }

  //Método para insertar un animal:
  insertFauna(fauna: Fauna)
  {
    this.faunaList.push({
      nombre: fauna.nombre,
      dieta: fauna.dieta,
      bioma: fauna.bioma,
      estado: fauna.estado,
      clase: fauna.clase,
      orden: fauna.orden,
      familia: fauna.familia,
      genero: fauna.genero,
      especie: fauna.especie,
      subespecie: fauna.subespecie
    });
  }

  //Método para actualizar los datos de un animal:
  updateFauna(fauna: Fauna)
  {
    this.faunaList.update(fauna.$key, {
      foto: fauna.foto,
      nombre: fauna.nombre,
      dieta: fauna.dieta,
      bioma: fauna.bioma,
      estado: fauna.estado,
      clase: fauna.clase,
      orden: fauna.orden,
      familia: fauna.familia,
      genero: fauna.genero,
      especie: fauna.especie,
      subespecie: fauna.subespecie
    });
  }

  //Método para borrar un animal:
  deleteFauna($key: string)
  {
    this.faunaList.remove($key);
  }
}
