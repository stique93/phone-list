import { Injectable } from '@angular/core';
import { PERSONS } from './mock-person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }
  persons = PERSONS;
  userName: string = '';
  userPhone: string = '';
  userEmail: string = '';
  public currentPersonId = -1;

  public onAddNewPerson() {
    if (this.userName != null && this.userName != '') {
      this.persons.push(
        {
          name: this.userName,
          phone: this.userPhone,
          email: this.userEmail
        }
      )
    }
    this.resetFields();
  }
  resetFields() {
    this.userName = '';
    this.userPhone = '';
    this.userEmail = '';
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1)
  }
  editPerson(index: number): void {
    //  this.AddNEditPersonComponent.editPersona(index);
    this.userName = this.persons[index].name;
    this.userEmail = this.persons[index].email;
    this.userPhone = this.persons[index].phone;
  }
  savePerson() {
    this.persons[this.currentPersonId].name = this.userName;
    this.persons[this.currentPersonId].email = this.userEmail;
    this.persons[this.currentPersonId].phone = this.userPhone;
    this.currentPersonId = -1;
    this.resetFields();
  }
}
