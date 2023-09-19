import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.employees = [
      {
      id: 1,
      firstName: 'Aygun',
      lastName: 'Ozdemir',
      emailId: 'aygunozdemir1@gmail.com'},
      {
        id: 2,
        firstName: 'Aygun',
        lastName: 'Ozdemir',
        emailId: 'aygunozdemir1@gmail.com'},
    ]
  }

  protected readonly Employee = Employee;
}
