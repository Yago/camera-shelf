import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decade'
})
export class DecadePipe implements PipeTransform  {
  transform(value, args) {
    if (args === 'all') {
      return value;
    } else {
      return value.filter((item) => {
        return String(item.year).substring(0, 3) === String(args);
      });
    }
  }
}
