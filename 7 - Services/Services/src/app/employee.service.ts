import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees()
  {
    return [
      {"id": 1, "name": "Kratos", "age": 500},
      {"id": 2, "name": "Nathan", "age": 40},
      {"id": 3, "name": "Lara", "age": 30},
      {"id": 4, "name": "Geralt", "age": 110}
    ];
  }
}
