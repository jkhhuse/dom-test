import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo10',
  templateUrl: './demo10.component.html',
  styleUrls: ['./demo10.component.css']
})
export class Demo10Component implements OnInit {

  @Input() title = 'a works!';
  @Output() onTitleChange = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }
  
  onTitleClick() {
    this.onTitleChange.emit();
  }

}
