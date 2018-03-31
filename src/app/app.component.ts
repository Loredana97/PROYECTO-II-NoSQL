import { Component, OnInit } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Aechmea';

  //Para firestore:
  /*itemsCollection: AngularFirestoreCollection<Items>;
  items: Observable<Items[]>;

  constructor(public afs: AngularFirestore){ }

  ngOnInit()
  {
    this.itemsCollection = this.afs.collection('items', ref=>{
      return ref.orderBy('nombre_Animal');
    })
    this.items = this.itemsCollection.valueChanges();
  }*/

}
