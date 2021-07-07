import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public ngIf = "ngIf Directive";
  public displayText = true;

  public ngSwitch = "ngSwitch Directive";
  public color = "";

  public ngFor = "ngFor Directive"
  public colorArray = ["red", "blue", "green"];

  constructor() { }

  ngOnInit(): void {
  }

  //for ngIf directive
  switch()
  {
    if(this.displayText == true)
    {
      this.displayText = false;
    }

    else if(this.displayText == false)
    {
      this.displayText = true
    }
  }

  //for ngSwitch directive
  onClickRed()
  {
    this.color = "red";
  }
  //for ngSwitch directive
  onClickGreen()
  {
    this.color = "green";
  }
  //for ngSwitch directive
  onClickBlue()
  {
    this.color = "blue";
  }

}
