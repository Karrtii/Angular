import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments = [
    {"id": 1, "name": "Android Studio"},
    {"id": 2, "name": "Webstorm"},
    {"id": 3, "name": "IntelliJ"},
    {"id": 4, "name": "Unreal"}
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any)
  {
    this.router.navigate(['/departments', department.id]);
  }

}
