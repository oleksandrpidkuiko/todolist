import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective {

  @HostBinding('style.background-color') myColor: string;
  @HostListener('change', ['$event']) changeColor(event) {
   if (this.myColor === 'yellowgreen') {
     this.myColor = 'greenyellow';
   } else {
     this.myColor = 'yellowgreen';
   }
  }

  constructor() {
    this.myColor = 'greenyellow';
  }

}
