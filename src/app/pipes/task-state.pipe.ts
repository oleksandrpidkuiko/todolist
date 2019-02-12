import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskState'
})
export class TaskStatePipe implements PipeTransform {

  transform(value: boolean): string {
    if (value) {
      return 'Выполнена';
    } return 'Нужно выполнить';
  }

}
