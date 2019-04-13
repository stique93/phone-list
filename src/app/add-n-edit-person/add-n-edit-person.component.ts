import { Component, OnInit, Input } from '@angular/core';
import { PERSONS } from '../mock-person';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-add-n-edit-person',
  templateUrl: './add-n-edit-person.component.html',
  styleUrls: ['./add-n-edit-person.component.css']
})


export class AddNEditPersonComponent implements OnInit {
  persons = PERSONS;



  constructor(public PersonService: PersonService) { }

  ngOnInit() {

  }
  onAddNewPerson() {
    //this.PersonService.onAddNewPerson(this.userName,this.userEmail,this.userPhone);
    //this.PersonService.onAddNewPerson(this.PersonService.userName,this.PersonService.userEmail,this.PersonService.userPhone);
    this.PersonService.onAddNewPerson();
    console.log(this.PersonService.currentPersonId);
  }
  onSavePerson() {
    this.PersonService.savePerson();
  };

}
