import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

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

  public selectedId: any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department: any)
  {
    //this.router.navigate(['/departments', department.id]); absolute path
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department: any)
  {
    return department.id === this.selectedId;
  }

}
