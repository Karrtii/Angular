import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(<string>this.route.snapshot.paramMap.get('id')); //snapshot approach. doesnt work fully because it reuses the same view
    //this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(<string>params.get('id'));
      this.departmentId = id;
    })
  }

  goPrevious()
  {
    let previousId = this.departmentId - 1;
    this.router.navigate(['/departments', previousId]);
  }

  goNext()
  {
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }

  goToDepartments()
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testValues'}]); //the test parameter is just to show that you can have more than one parameter
  }

}
