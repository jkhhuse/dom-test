import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo4]'
})
export class Demo4Directive implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(
      this.el.nativeElement,
      'border-left',
      '2px dashed olive'
    );
  }

}
