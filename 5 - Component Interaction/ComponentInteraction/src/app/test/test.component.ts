import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public componentInteraction = "component interaction";
  //@Input() public parentData: any; //same thing as below, but in the html file it will be parentData instead of name
  @Input('parentData') public name: any;//another way of doing it if you want to have another variable name
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  fireEventRdr2()
  {
    this.childEvent.emit("Red Dead Redemption 2");
  }

  fireEventGow() {
    this.childEvent.emit("God of War");
  }

  fireEventWitcher()
  {
    this.childEvent.emit("Witcher 3: The Wild Hunt");
  }

}
