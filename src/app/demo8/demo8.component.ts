import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-demo8',
  templateUrl: './demo8.component.html',
  styleUrls: ['./demo8.component.css']
})
export class Demo8Component implements OnInit {

  // loading = true;
  @ViewChild('loading', {read: TemplateRef}) tref: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      // this.loading = true;
      console.log(this.tref);
    }, 2000);
  }


}
