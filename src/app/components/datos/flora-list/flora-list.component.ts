import { Component, OnInit } from '@angular/core';

//Imports del Model:
import { Flora } from '../../../models/flora';

//Imports del Service:
import { FloraService } from '../../../services/flora.service';

//Imports del toastr:
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-flora-list',
  templateUrl: './flora-list.component.html',
  styleUrls: ['./flora-list.component.css']
})
export class FloraListComponent implements OnInit {
  floraList: Flora[];

  constructor(private floraService: FloraService, private toastr: ToastrService) { }

  ngOnInit() {
    return this.floraService.getFlora()
      .snapshotChanges().subscribe(item => {
        this.floraList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.floraList.push(x as Flora);
        });
      });
  }

  onEdit(flora: Flora) {
    this.floraService.selectedFlora = Object.assign({}, flora);
  }

  onDelete($key: string) {
    if(confirm('¿Estás seguro que quieres borrar el elemento?')) {
      this.floraService.deleteFlora($key);
      this.toastr.warning('Borrado éxitosamente', 'Planta removida');
    }
  }

}