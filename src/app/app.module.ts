import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Demo1Directive } from './demo1/demo1.directive';
import { Demo2Directive } from './demo2/demo2.directive';
import { Demo3Directive } from './demo3/demo3.directive';
import { Demo4Directive } from './demo4/demo4.directive';
import { Demo5Directive } from './demo5/demo5.directive';
import { Demo6Directive } from './demo6/demo6.directive';
import { Demo7Component } from './demo7/demo7.component';
import { Demo8Component } from './demo8/demo8.component';
import { Demo9Component } from './demo9/demo9.component';
import { Demo10Component } from './demo10/demo10.component';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Directive,
    Demo2Directive,
    Demo3Directive,
    Demo4Directive,
    Demo5Directive,
    Demo6Directive,
    Demo7Component,
    Demo8Component,
    Demo9Component,
    Demo10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [Demo10Component ]
})
export class AppModule { }
