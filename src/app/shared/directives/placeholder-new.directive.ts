import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPlaceholderNew]'
})
export class PlaceholderNewDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
