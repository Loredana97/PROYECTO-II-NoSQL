import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloraListComponent } from './flora-list.component';

describe('FloraListComponent', () => {
  let component: FloraListComponent;
  let fixture: ComponentFixture<FloraListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloraListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
