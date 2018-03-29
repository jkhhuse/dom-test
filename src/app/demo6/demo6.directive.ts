import { Directive, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDemo6]'
})
export class Demo6Directive implements OnInit, AfterViewInit {

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    console.log(this.el.nativeElement.querySelector('div'));
  }

  ngAfterViewInit() {
  }

}
