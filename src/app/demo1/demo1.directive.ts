import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo1]'
})
export class Demo1Directive implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.addClass(this.el.nativeElement, 'wild');
  }

}
