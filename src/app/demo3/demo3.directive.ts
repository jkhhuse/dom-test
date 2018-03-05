import { Directive, Renderer2, ElementRef, OnInit, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDemo3]'
})
export class Demo3Directive implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');
  }

  @HostListener('click', ['$event.target'])
  toggle() {
    if (this.el.nativeElement.attributes['aria-hidden'].value === 'true') {
      this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'false');
    } else {
      this.renderer.setAttribute(this.el.nativeElement, 'aria-hidden', 'true');
    }
  }

  // anthoer realization method , use hostbinding

  // @HostBinding('attr.aria-hidden') ariaHidden: boolean;

  // constructor(private renderer: Renderer2, private el: ElementRef) { }

  // ngOnInit() {
  //   this.ariaHidden = true;
  // }

  // @HostListener('click', ['$event.target'])
  // toggle() {
  //   this.ariaHidden = !this.ariaHidden;
  // }
}
