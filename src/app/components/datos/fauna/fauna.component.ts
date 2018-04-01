import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Import de Service: 
import { FaunaService } from '../../../services/fauna.service';


//Import de la Clase:
import { Fauna } from '../../../models/fauna';


//Import del toastr:
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fauna',
  templateUrl: './fauna.component.html',
  styleUrls: ['./fauna.component.css']
})
export class FaunaComponent implements OnInit {

  constructor( private faunaService: FaunaService, private toastr: ToastrService) { }

  ngOnInit() 
  {
    this.faunaService.getFauna();
    this.resetForm();
  }

  //Se aceptan los datos introducidos del animal:
  onSubmit(faunaForm: NgForm)
  {
    if(faunaForm.value.$key == null)
      this.faunaService.insertFauna(faunaForm.value);
    else
    this.faunaService.updateFauna(faunaForm.value);
    
    this.resetForm(faunaForm);
    this.toastr.success('Operación exitosa', 'Animal Registrado');
  }

  //Se ponen en blanco los campos de introducción de datos:
  resetForm(faunaForm?: NgForm)
  {
    if(faunaForm != null)
      faunaForm.reset();
      this.faunaService.selectedFauna = new Fauna();
  }

}
