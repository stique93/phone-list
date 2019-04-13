import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PERSONS } from '../mock-person';

import { AddNEditPersonComponent } from './add-n-edit-person.component';

describe('AddNEditPersonComponent', () => {
  let component: AddNEditPersonComponent;
  let fixture: ComponentFixture<AddNEditPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNEditPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNEditPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
