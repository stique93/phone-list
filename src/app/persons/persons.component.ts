import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  public persons;


  constructor(
    public PersonService: PersonService) {
    this.persons = this.PersonService.persons;
  }


  ngOnInit() {
  }

  editPerson(index: number) {
    this.PersonService.editPerson(index);
    this.PersonService.currentPersonId = index;
  }

  deletePerson(index: number) {
    this.PersonService.deletePerson(index);
  }
}

