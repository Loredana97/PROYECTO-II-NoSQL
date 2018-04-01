import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

//Import de Service: 
import { FotosService } from '../../../services/fotos.service';

//Import de la Clase:
import { Fotos } from '../../../models/fotos';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  constructor(private fotosService: FotosService) { }

  ngOnInit() {
  	    this.fotosService.getFotos();
  }

}
