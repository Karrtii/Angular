import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public interpolation = "interpolation";
  public name = "Bruce Lee";

  public propertyBinding = "property binding";
  public myId = "testId";
  public isDisabled = true;

  public classBinding = "class binding";
  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  public styleBinding = "style binding";
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: "italic"
  }

  public eventBinding = "event binding";
  public boom = "";

  public templateReferenceVariables = "template reference variables";
  public enteredName = "";

  public twoWayBinding = "two way binding";
  public enteredText = "";

  constructor() { }

  ngOnInit(): void {
  }

  //for interpolation
  greetUser()
  {
    return "Hello " + this.name;
  }

  //for event binding
  onClick()
  {
    this.boom = "boom!"
    return this.boom;
  }

  //for template reference variables
  logName(value: any)
  {
    this.enteredName = value;
  }


 }
