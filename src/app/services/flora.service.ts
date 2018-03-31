import { Injectable } from '@angular/core';

//Import de Firebase:
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

//Import del Modelo:
import { Flora } from '../models/flora';


@Injectable()
export class FloraService 
{

  floraList: AngularFireList<any>;
  selectedFlora: Flora = new Flora();

  constructor(private firebase: AngularFireDatabase) { }

  getFlora()
  {
    return this.floraList = this.firebase.list('Flora');
  }

  //Método para insertar un animal:
  insertFlora(flora: Flora)
  {
    this.floraList.push({
      nombre: flora.nombre,
      bioma: flora.bioma,
      estado: flora.estado,
      clase: flora.clase,
      orden: flora.orden,
      familia: flora.familia,
      genero: flora.genero,
      especie: flora.especie,
    });
  }

  //Método para actualizar los datos de un animal:
  updateFlora(flora: Flora)
  {
    this.floraList.update(flora.$key, {
      foto: flora.foto,
      nombre: flora.nombre,
      bioma: flora.bioma,
      estado: flora.estado,
      clase: flora.clase,
      orden: flora.orden,
      familia: flora.familia,
      genero: flora.genero,
      especie: flora.especie,
    });
  }

  //Método para borrar un animal:
  deleteFlora($key: string)
  {
    this.floraList.remove($key);
  }
}