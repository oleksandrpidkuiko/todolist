import { Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorState]'
})
export class ColorStateDirective {

  @HostBinding('style.text-decoration') textDecoration: string;
  @HostListener('click') changeTaskFromList() {
   if (this.textDecoration === 'line-through') {
     this.textDecoration = 'none';
   } else {
     this.textDecoration = 'line-through';
   }
  }

  constructor() {
  }

}
