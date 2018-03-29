import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFaunaFloraComponent } from './lista-fauna-flora.component';

describe('ListaFaunaFloraComponent', () => {
  let component: ListaFaunaFloraComponent;
  let fixture: ComponentFixture<ListaFaunaFloraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFaunaFloraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFaunaFloraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
