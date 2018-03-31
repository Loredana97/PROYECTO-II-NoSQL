import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaListComponent } from './fauna-list.component';

describe('FaunaListComponent', () => {
  let component: FaunaListComponent;
  let fixture: ComponentFixture<FaunaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaunaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaunaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
