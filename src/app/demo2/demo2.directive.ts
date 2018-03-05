import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDemo2]'
})
export class Demo2Directive implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    const div1 = this.renderer.createElement('div');
    const text1 = this.renderer.createText('append dom element!');

    this.renderer.appendChild(div1, text1);
    this.renderer.appendChild(this.el.nativeElement, div1);
  }

}
