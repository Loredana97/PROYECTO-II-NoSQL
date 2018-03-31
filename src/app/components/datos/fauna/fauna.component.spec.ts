import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaunaComponent } from './fauna.component';

describe('FaunaComponent', () => {
  let component: FaunaComponent;
  let fixture: ComponentFixture<FaunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
