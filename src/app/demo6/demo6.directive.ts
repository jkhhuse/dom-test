import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: '[appDemo6]',
  template: `<div>abc</div>`
})
export class Demo6Component implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    console.log(this.el.nativeElement.querySelector('div'));
  }

  ngAfterViewInit() {
  }

}
