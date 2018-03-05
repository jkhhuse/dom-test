import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo5]'
})
export class Demo5Directive {

  constructor() { }

  @HostListener('document:dblclick', ['$event.target'])
  onDoubleClick(e) {
    console.log(e);
  }
}
