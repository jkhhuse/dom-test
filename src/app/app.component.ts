import { Component, ComponentFactoryResolver, Injector, ElementRef,
  ComponentRef, ApplicationRef, AfterViewInit, OnDestroy
} from '@angular/core';
import { Demo10Component } from './demo10/demo10.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  component: ComponentRef<Demo10Component>;
  
  constructor(
      private componentFactoryResolver: ComponentFactoryResolver,
      private elementRef: ElementRef,
      private injector: Injector,
      private appRef: ApplicationRef
  ) {
      this.component = this.componentFactoryResolver
          .resolveComponentFactory(Demo10Component)
          .create(this.injector);
      appRef.attachView(this.component.hostView);
      (<Demo10Component>this.component.instance).onTitleChange
          .subscribe(() => {
              console.log("title clicked")
          });
      (<Demo10Component>this.component.instance).title = "a works again!";
  }

  ngAfterViewInit() {
      let host = document.createElement("div");
      host.appendChild((this.component.hostView as any).rootNodes[0]);
      this.elementRef.nativeElement.appendChild(host);
  }
  
  ngOnDestroy() {
      this.appRef.detachView(this.component.hostView);
      this.component.destroy();
  }
}
