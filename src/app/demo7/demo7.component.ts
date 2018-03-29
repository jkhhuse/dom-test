import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-demo7',
  templateUrl: './demo7.component.html',
  styleUrls: ['./demo7.component.css']
})
export class Demo7Component implements OnInit, AfterViewInit {

  @ViewChild('tref', {read: ElementRef}) tref: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.tref.nativeElement.textContent);
  }

  ngAfterViewInit(): void {
    // outputs `I am span`
  }

}
