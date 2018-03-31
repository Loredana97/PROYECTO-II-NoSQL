import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Import de Service: 
import { FloraService } from '../../../services/flora.service';

//Import de la Clase:
import { Flora } from '../../../models/flora';

//Import del toastr:
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flora',
  templateUrl: './flora.component.html',
  styleUrls: ['./flora.component.css']
})
export class FloraComponent implements OnInit {

  constructor( private floraService: FloraService, private toastr: ToastrService) { }

  ngOnInit() 
  {
    this.floraService.getFlora();
    this.resetForm();
  }

  //Se aceptan los datos introducidos del animal:
  onSubmit(floraForm: NgForm)
  {
    if(floraForm.value.$key == null)
      this.floraService.insertFlora(floraForm.value);
    else
    this.floraService.updateFlora(floraForm.value);
    
    this.resetForm(floraForm);
    this.toastr.success('Operación exitosa', 'Planta Registrada');
  }

  //Se ponen en blanco los campos de introducción de datos:
  resetForm(floraForm?: NgForm)
  {
    if(floraForm != null)
      floraForm.reset();
      this.floraService.selectedFlora = new Flora();
  }

}