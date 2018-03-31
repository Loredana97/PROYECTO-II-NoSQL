import { Component, OnInit } from '@angular/core';

//Imports del Model:
import { Fauna } from '../../../models/fauna';

//Imports del Service:
import { FaunaService } from '../../../services/fauna.service';

//Imports del toastr:
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-fauna-list',
  templateUrl: './fauna-list.component.html',
  styleUrls: ['./fauna-list.component.css']
})
export class FaunaListComponent implements OnInit {
  faunaList: Fauna[];

  constructor(private faunaService: FaunaService, private toastr: ToastrService) { }

  ngOnInit() {
    return this.faunaService.getFauna()
      .snapshotChanges().subscribe(item => {
        this.faunaList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.faunaList.push(x as Fauna);
        });
      });
  }

  onEdit(fauna: Fauna) {
    this.faunaService.selectedFauna = Object.assign({}, fauna);
  }

  onDelete($key: string) {
    if(confirm('¿Estás seguro que quieres borrar el elemento?')) {
      this.faunaService.deleteFauna($key);
      this.toastr.warning('Borrado éxitosamente', 'Animal removido');
    }
  }

}
