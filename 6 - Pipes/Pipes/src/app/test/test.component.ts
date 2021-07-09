import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public pipes = "pipes";
  public roach = "Roach";
  public message = "Roach is an idiot";
  public person = {
    "firstname": "Tic",
    "lastName": "Tac"
  }
  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
