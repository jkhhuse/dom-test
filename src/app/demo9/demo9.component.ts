import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-demo9',
  templateUrl: './demo9.component.html',
  styleUrls: ['./demo9.component.css']
})
export class Demo9Component implements AfterViewInit {

  @ViewChild("vc", {read: ViewContainerRef}) vc: ViewContainerRef;
  @ViewChild("tpl") tpl: TemplateRef<any>;

  constructor() { }

  ngAfterViewInit() {
      let view = this.tpl.createEmbeddedView(null);
      this.vc.insert(view);
  }

}
